import type { MetadataRoute } from "next";

const siteUrl = "https://danielferrena.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/brands", "/portfolio", "/resume", "/education", "/about"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
