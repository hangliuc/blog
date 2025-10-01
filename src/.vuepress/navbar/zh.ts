import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "运维",
    children: [
      { text: "Liunx", link: "/zh/运维/Liunx/",},
      { text: "Ansible", link: "/zh/运维/Ansible/",},
      { text: "Docker", link: "/zh/运维/Docker/",},
      { text: "Other", link: "/zh/运维/Other/",},
      { text: "Mysql", link: "/zh/运维/Mysql/",},
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
      {text: "theme-hope",link: "https://theme-hope.vuejs.press/zh/",},
      {text: "markdown",link: "https://markdown.com.cn/basic-syntax/headings.html",},
      {text: "eryajf-blog",link: "https://wiki.eryajf.net/",},
    ],
  },
]);
