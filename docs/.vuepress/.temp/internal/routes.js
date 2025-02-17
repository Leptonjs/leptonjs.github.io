export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Introduction"} }],
  ["/component.html", { loader: () => import(/* webpackChunkName: "component.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/component.html.js"), meta: {"title":""} }],
  ["/installation.html", { loader: () => import(/* webpackChunkName: "installation.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/installation.html.js"), meta: {"title":""} }],
  ["/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/introduction.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
