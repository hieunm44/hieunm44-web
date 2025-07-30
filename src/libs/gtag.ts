import { CONFIG } from "site.config"
export const GA_TRACKING_ID = CONFIG.googleAnalytics.config.measurementId

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  if (typeof window !== "object") return
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  language,
  label,
  value,
}: {
  action: any
  language: any
  label: any
  value: any
}) => {
  if (typeof window !== "object") return
  window.gtag("event", action, {
    event_language: language,
    event_label: label,
    value: value,
  })
}
