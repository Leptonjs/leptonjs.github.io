export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Introduction"} }],
  ["/component.html", { loader: () => import(/* webpackChunkName: "component.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/component.html.js"), meta: {"title":""} }],
  ["/installation.html", { loader: () => import(/* webpackChunkName: "installation.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/installation.html.js"), meta: {"title":""} }],
  ["/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/introduction.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
