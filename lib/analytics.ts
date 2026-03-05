declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  data?: Record<string, unknown>
) {
  // Facebook Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, data);
  }

  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, data);
  }
}

export function getUTMParams(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }

  return utm;
}
