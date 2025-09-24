import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "运维",
    children: [
      { text: "Docker", link: "/zh/运维/Docker/",},
      { text: "Other", link: "/zh/运维/Other/",},
    ],
  },
  {
    text: "编程",
    children: [
      {text: "Go",link: "/zh/编程/Go/",},
      {text: "Python",link: "/zh/编程/Python/",},
      {text: "Shell",link: "/zh/编程/Shell/",},
    ],
  },
  {
    text: "专题",
    children: [
      {text: "博客相关",link: "/zh/专题/博客相关/",},
    ],
  },
  {
    text: "友链",
    children: [
      {text: "theme-hope 文档",link: "https://theme-hope.vuejs.press/zh/",},
      {text: "markdown",link: "https://markdown.com.cn/basic-syntax/headings.html",},
      {text: "二丫讲梵",link: "https://wiki.eryajf.net/",},
    ],
  },
]);
