const ROUTE_CHANGE = "route-change";

const push = (nextUrl) => {
  history.pushState(null, null, nextUrl);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE));
};

const initRoute = (route) => {
  window.addEventListener("route-change", (e) => {
    route();
  });

  window.addEventListener("popstate", (e) => {
    route();
  });
};

const RouterUtils = { initRoute, push };

export default RouterUtils;
