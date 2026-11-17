import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { SERVICES } from "@/app/services/services";
import { AUDIENCES } from "@/app/[audience]/audiences";
import { LOCATIONS } from "@/app/location/[landing]/landing";

const url = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Core pages
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Services (app/services/[service])
    ...Object.keys(SERVICES).map((slug) => ({
      url: url(`/services/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Audiences (app/[audience])
    ...Object.keys(AUDIENCES).map((slug) => ({
      url: url(`/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Locations (app/location/[landing])
    ...Object.keys(LOCATIONS).map((slug) => ({
      url: url(`/location/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Policies
    { url: url("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: url("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
