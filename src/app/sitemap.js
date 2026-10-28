import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function sitemap() {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}
