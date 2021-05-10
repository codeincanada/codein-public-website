// eslint-disable-next-line no-undef
export let GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

if (typeof window !== "undefined") {
  if (window.location.hostname.includes("codein")) {
    // eslint-disable-next-line no-undef
    GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID_CODEIN_CA;
  }
}

interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  // @ts-ignore
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/* BELOW IS FROM THE OFFICIAL
 * https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js */
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url) => {
//   window.gtag("config", GA_TRACKING_ID, {
//     page_path: url,
//   });
// };
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }) => {
//   window.gtag("event", action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   });
// };
