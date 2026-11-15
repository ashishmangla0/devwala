import Link from "next/link";

import styles from "./socialLinks.module.scss";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "twitter", href: "https://x.com/yourhandle" },
  { platform: "discord", href: "https://discord.gg/yourinvite" },
  { platform: "linkedin", href: "https://linkedin.com/in/yourhandle" },
  { platform: "instagram", href: "https://instagram.com/yourhandle" },
  { platform: "youtube", href: "https://youtube.com/@yourchannel" },
];

export type SocialPlatform =
  | "twitter"
  | "facebook"
  | "discord"
  | "instagram"
  | "linkedin"
  | "pinterest"
  | "whatsapp"
  | "youtube";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  /** Accessible name; defaults to the platform name. */
  label?: string;
};

type SocialLinksProps = {
  /** Defaults to the site-wide social profiles; pass to override. */
  links?: SocialLink[];
  className?: string;
  ariaLabel?: string;
};

const LABELS: Record<SocialPlatform, string> = {
  twitter: "X (Twitter)",
  facebook: "Facebook",
  discord: "Discord",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  pinterest: "Pinterest",
  whatsapp: "WhatsApp",
  youtube: "YouTube",
};

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith("//");
}

export function SocialLinks({
  links = SOCIAL_LINKS,
  className,
  ariaLabel = "Social media",
}: SocialLinksProps) {
  return (
    <ul
      className={[styles.socialLinks, className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
      data-testid="social-links"
    >
      {links.map(({ platform, href, label }) => {
        const name = label ?? LABELS[platform];
        const external = isExternalHref(href);

        return (
          <li key={`${platform}-${href}`} className={styles.socialLinks_item}>
            <Link
              href={href}
              className={styles.socialLinks_link}
              aria-label={name}
              title={name}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <i
                className={`icon icon-${platform} ${styles.socialLinks_icon}`}
                aria-hidden="true"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
