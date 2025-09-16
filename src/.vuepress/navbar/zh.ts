import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "运维",
    // icon: "pen-to-square", #图标显示
    prefix: "/zh/运维/",
    children: [
      {
        text: "Docker",
        // icon: "pen-to-square", #图标显示
        prefix: "/zh/运维/docker/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "shell",
        icon: "pen-to-square",
        prefix: "/shell/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "编程",
    // icon: "pen-to-square",
    prefix: "/zh/编程/",
    children: [
      {
        text: "python",
        // icon: "pen-to-square",
        link: "python",
        children: [
          { text: "1.md", 
            icon: "pen-to-square",
            link: "1.md" },
        ],
      },
      {
        text: "Go",
        // icon: "pen-to-square",
        link: "Go",
        children: [
          { text: "1.md", 
            icon: "pen-to-square",
            link: "1.md" },
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
