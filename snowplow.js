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
}

const module = {
  onRouteDidUpdate({ location, previousLocation }) {
    if (location.pathname !== previousLocation?.pathname) {
      // see https://github.com/facebook/docusaurus/pull/7424 regarding setTimeout
      setTimeout(() => {
        trackPageView();
      });
    }
  },
};

export default module;
