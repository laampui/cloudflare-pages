import { defineConfig } from "vitepress";
import { generateBreadcrumbsData } from "@nolebase/vitepress-plugin-breadcrumbs/vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-breadcrumbs/client",
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
        "@nolebase/vitepress-plugin-breadcrumbs",
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/ui",
      ],
    },
  },
  title: "My Notebook",
  description: "A personal notebook",
  head: [
    [
      "meta",
      { name: "google-adsense-account", content: "ca-pub-3027222694616470" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 16 16'><text x='0' y='14'>🥴</text></svg>`,
      },
    ],
    [
      "script",
      { async: "async", src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3027222694616470", crossorigin: "anonymous" },
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-2FG5CQFDV9' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2FG5CQFDV9');`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      // { text: "目录", link: "/contents" },
    ],

    sidebar: [
      {
        text: "",
        items: [
          { text: "🐾 dog", link: "/dog" },
          { text: "⌨️ K98键盘手册", link: "/keyboard-manual" },
          { text: "✍️ 文摘", link: "/quotes" },
          { text: "🤓 JS", link: "/js" },
          { text: "🗑️ 杂七杂八", link: "/misc" },
          { text: "🈂 Katakana", link: "/katakana" },
          { text: "🍣 粵語", link: "/cantonese" },
          { text: "🍣 みんなの日本語", link: "/japanese" },
          {
            text: "📚 读书笔记",
            link: "",
            items: [
              {
                text: "人体调查组",
                link: "/books/human-body-ix",
              },
              {
                text: "向死而生",
                link: "/books/seeing-life-through-death",
              },
              {
                text: "马斯克传",
                link: "/books/elon-musk",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/laampui" },
      { icon: "twitter", link: "https://x.com/laampui" },
    ],
  },
  transformPageData(pageData, context) {
    generateBreadcrumbsData(pageData, context);
  },
});
