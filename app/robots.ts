import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Crawlers that power AI answers (GEO/AIO). Explicitly allowed so a future
 * broad Disallow for `*` can never lock them out by accident.
 * Bingbot matters because ChatGPT's web results largely come via Bing.
 */
const AI_BOTS = [
  "GPTBot", // OpenAI — ChatGPT crawling
  "OAI-SearchBot", // OpenAI — ChatGPT search index
  "ChatGPT-User", // OpenAI — browsing on a user's behalf
  "PerplexityBot", // Perplexity
  "ClaudeBot", // Anthropic
  "Google-Extended", // Google — Gemini / AI Overviews training signal
  "Bingbot", // Microsoft — feeds ChatGPT web results
  "Applebot-Extended", // Apple — Apple Intelligence
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: AI_BOTS,
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
