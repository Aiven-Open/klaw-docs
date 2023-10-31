import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { newTracker, trackPageView } from "@snowplow/browser-tracker";

const trackerConfig = {
  appId: "klaw-docs",
  platform: "web",
  forceSecureTracker: true,
  discoverRootDomain: true,
  cookieSameSite: "Lax",
  anonymousTracking: { withServerAnonymisation: true },
  postPath: "/aiven/dc",
  crossDomainLinker: function (linkElement) {
    return linkElement.id === "crossDomainLink";
  },
  stateStorageStrategy: "none",
  eventMethod: "post",
  contexts: {
    webPage: true,
  },
};

function setupBrowserTracker() {
  newTracker("at", "dc.aiven.io", trackerConfig);
}

if (ExecutionEnvironment.canUseDOM) {
  setupBrowserTracker();
  trackPageView();
}

export default module;
