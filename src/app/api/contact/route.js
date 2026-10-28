import { getDb } from "@/db";
import { contactMessages } from "@/db/schema";

export const dynamic = "force-dynamic";

// Very small per-instance rate limiter: 5 messages / 10 min / IP. Fine for a
// single-instance portfolio; swap for a shared store if ever multi-instance.
const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip) || { count: 0, reset: now + WINDOW_MS };
  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + WINDOW_MS;
  }
  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > MAX_HITS;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function bad(message, status = 400) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return bad("Too many messages in a short time — please email me directly.", 429);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return bad("Invalid request body.");
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const budget = String(body.budget || "").trim().slice(0, 60);
  const message = String(body.message || "").trim();
  const company = String(body.company || ""); // honeypot

  // Bots fill hidden fields; humans cannot see this one.
  if (company) return Response.json({ ok: true });

  if (name.length < 2 || name.length > 120) return bad("Please enter your name.");
  if (!EMAIL_RE.test(email) || email.length > 200) return bad("Please enter a valid email address.");
  if (message.length < 10) return bad("Please tell me a little more about the project.");
  if (message.length > 2000) return bad("Please keep the message under 2,000 characters.");

  const db = getDb();
  if (!db) {
    return bad("The form is temporarily unavailable — please email me directly.", 503);
  }

  try {
    await db.insert(contactMessages).values({ name, email, budget, message });
    return Response.json({ ok: true });
  } catch {
    return bad("The form is temporarily unavailable — please email me directly.", 503);
  }
}
