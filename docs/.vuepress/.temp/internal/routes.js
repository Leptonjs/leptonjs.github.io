export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Introduction"} }],
  ["/installation.html", { loader: () => import(/* webpackChunkName: "installation.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/installation.html.js"), meta: {"title":"Installation"} }],
  ["/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/page.html.js"), meta: {"title":"Page"} }],
  ["/partial.html", { loader: () => import(/* webpackChunkName: "partial.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/partial.html.js"), meta: {"title":""} }],
  ["/properties.html", { loader: () => import(/* webpackChunkName: "properties.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/properties.html.js"), meta: {"title":""} }],
  ["/property.html", { loader: () => import(/* webpackChunkName: "property.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/property.html.js"), meta: {"title":"Page"} }],
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
