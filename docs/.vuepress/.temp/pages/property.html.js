import comp from "/Users/ellite/code/explore/keera/packages/leptonjs-docs/docs/.vuepress/.temp/pages/property.html.vue"
const data = JSON.parse("{\"path\":\"/property.html\",\"title\":\"Page\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Page\",\"description\":\"Props & States in LeptonJs\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"property.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
