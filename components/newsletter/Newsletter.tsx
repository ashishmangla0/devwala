"use client";

import { useEffect, useState, type FormEvent } from "react";

import { Body } from "../body";
import styles from "./newsletter.module.scss";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Email-capture box — posts to /api/newsletter, which subscribes the
 * address to the Brevo (Sendinblue) list. Self-contained: heading,
 * form, and status messaging all live here.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  // Success shown for a moment, then the form resets to a fresh state
  // so the visitor (or the next one) can subscribe again.
  useEffect(() => {
    if (status !== "success") return;

    const timer = setTimeout(() => {
      setStatus("idle");
      setMessage("");
      setEmail("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong — please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're in! We'll email you when new batches open.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error — please try again.");
    }
  }

  const busy = status === "loading";
  const done = status === "success";
  const disabled = busy || done;

  return (
    <div className={styles.newsletter} data-testid="newsletter">
      <div className={styles.copy}>
        <Body as="p" className={styles.title}>
          Get new batches &amp; free workshops in your inbox
        </Body>
        <Body size="medium" className={styles.subtitle}>
          One email when something useful drops. No spam — unsubscribe any
          time.
        </Body>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="newsletter-email">
          Email address
        </label>

        <div className={styles.row}>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            className={styles.input}
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
            disabled={disabled}
          />
          <button type="submit" className={styles.button} disabled={disabled}>
            {busy ? "Subscribing…" : done ? "Subscribed ✓" : "Subscribe"}
          </button>
        </div>
      </form>

      <p
        className={status === "error" ? styles.message_error : styles.message}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
}
