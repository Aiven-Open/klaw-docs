import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { trackSearchEvent } from "./src/utils/tracking";

//Tracks docs search usage via DOM event delegation
function setupSearchTracking() {
  if (!ExecutionEnvironment.canUseDOM) {
    return;
  }

  let debounceTimer;

  // A search query was submitted: input in the navbar search field changed.
  // Note: ".aa-input", ".aa-dropdown-menu .aa-suggestion" are the documented
  // default css classes of the underlying autocomplete.js library (stable API)
  // they should be stable. we do have a pipeline check that should catch when
  // those are removed (Verify search DOM hooks used by search-tracking.js still exist)
  document.addEventListener("input", (event) => {
    const input = event.target;
    //  is the documented input class of autocomplete.js
    if (!input.classList?.contains("aa-input")) {
      return;
    }
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = input.value.trim();
      if (query.length < 3) {
        return;
      }
      // https://github.com/algolia/autocomplete/tree/v1#cssclasses
      const hits = document.querySelectorAll(
        ".aa-dropdown-menu .aa-suggestion"
      );
      // Privacy: never send the raw query (may contain personal data)
      trackSearchEvent({ action: "query", value: hits.length });
    }, 800);
  });

  // A search result was clicked
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest(".aa-dropdown-menu a");
    if (anchor) {
      trackSearchEvent({
        action: "result-click",
        label: anchor.getAttribute("href"),
      });
    }
  });
}

setupSearchTracking();

const module = {
  onRouteDidUpdate() {},
};

export default module;
