import { trackStructEvent } from "@snowplow/browser-tracker";

const isProduction = process.env.NODE_ENV === "production";

//Sends a docs-search event to the existing Snowplow tracker
export function trackSearchEvent({ action, label, value }) {
  const payload = { category: "docs-search", action, label, value };
  if (isProduction) {
    trackStructEvent(payload, ["at"]);
  }
}
