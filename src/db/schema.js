import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

// Messages sent through the contact form. No users, no sessions — the table
// simply persists enquiries so they are not lost if email delivery is
// unavailable.
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  budget: varchar("budget", { length: 60 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
