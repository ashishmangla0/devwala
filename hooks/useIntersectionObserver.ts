import { useEffect, useRef, useState, type RefObject } from "react";

export type UseIntersectionObserverOptions = IntersectionObserverInit & {
  /** Set to false to pause observation without unmounting (default: true). */
  enabled?: boolean;
  /** Stop observing after the first intersection — for reveal-once animations. */
  once?: boolean;
  /** Called every time the intersection changes. */
  onIntersect?: (entry: IntersectionObserverEntry) => void;
};

export type UseIntersectionObserverResult = {
  /** Latest entry from the observer, or null before the first callback. */
  entry: IntersectionObserverEntry | null;
  /** Convenience mirror of entry.isIntersecting. */
  isIntersecting: boolean;
};

/**
 * Wraps the Intersection Observer API.
 *
 * Accepts a ref (or an element) plus every standard option —
 * `root`, `rootMargin`, `threshold` — as an options object.
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * const { isIntersecting } = useIntersectionObserver(ref, {
 *   threshold: 0.25,
 *   rootMargin: "0px 0px -10% 0px",
 *   once: true,
 * });
 *
 * @example
 * // By selector — for elements outside this component:
 * const { isIntersecting } = useIntersectionObserver("#site-eyebrow");
 */
export function useIntersectionObserver(
  target: RefObject<Element | null> | Element | string | null,
  options: UseIntersectionObserverOptions = {},
): UseIntersectionObserverResult {
  const {
    enabled = true,
    once = false,
    root = null,
    rootMargin,
    threshold,
    onIntersect,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  // Keep the latest callback without re-subscribing the observer every render
  const onIntersectRef = useRef(onIntersect);
  useEffect(() => {
    onIntersectRef.current = onIntersect;
  }, [onIntersect]);

  // threshold/rootMargin are arrays/strings that can't be stable deps —
  // serialize them so inline options don't recreate the observer each render
  const thresholdKey = threshold === undefined ? "" : JSON.stringify(threshold);
  const rootMarginKey = rootMargin ?? "";

  useEffect(() => {
    // Targets: a ref, a raw element, or a selector resolved after mount
    // (e.g. "#site-eyebrow" for an element rendered outside this component)
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target instanceof Element
          ? target
          : target?.current;

    if (!enabled || !element || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // The callback delivers a batch; the last entry is ours
        const observedEntry = entries[entries.length - 1];
        if (!observedEntry) return;

        setEntry(observedEntry);
        onIntersectRef.current?.(observedEntry);

        if (once && observedEntry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        root,
        rootMargin: rootMarginKey === "" ? undefined : rootMarginKey,
        threshold: thresholdKey === "" ? undefined : JSON.parse(thresholdKey),
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [target, enabled, once, root, rootMarginKey, thresholdKey]);

  return {
    entry,
    isIntersecting: entry?.isIntersecting ?? false,
  };
}
