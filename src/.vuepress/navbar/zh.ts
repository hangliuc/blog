import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "运维",
    children: [
      { text: "Docker", link: "/zh/运维/Docker/",},
      {text: "shell",link: "/zh/运维/Shell/",}
    ],
  },
  {
    text: "编程",
    children: [
      {text: "Go",link: "/zh/编程/Go/",},
      {text: "Python",link: "/zh/编程/Python/",}
    ],
  },
  {
    text: "theme-hope 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
