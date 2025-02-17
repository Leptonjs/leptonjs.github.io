import { viteBundler } from "@vuepress/bundler-vite"
import { shikiPlugin } from "@vuepress/plugin-shiki"
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress/cli"

export default defineUserConfig({
    lang: "en-US",

    title: "LeptonJs",
    description: "My first VuePress Site",

    theme: defaultTheme({
        navbar: ["/", "/introduction"],

        sidebar:[
            {
                text: 'Introduction',
                link: '/',
            },
            {
                text: 'Installation',
                link: '/installation',
            },
            {
                text: 'Component',
                link: '/component',
            }
        ]
    }),

    bundler: viteBundler(),

    plugins: [
        shikiPlugin({
            theme: "github-dark-default",
            langs: ["ts", "json", "vue", "md", "bash", "diff", "php"],
            lineNumbers: false,  // Disable line numbers properly
            notationDiff: true,
        }),
    ],
})
