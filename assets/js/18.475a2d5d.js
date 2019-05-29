(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{311:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("利用vuepress + vuepress-theme-meteorlxy 主题搭建博客")]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("创建一个新项目 "),n("code",[s._v("my-blog")])]),s._v(" "),n("div",{staticClass:"language-SH extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" my-blog\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" my-blog\n")])])]),n("p",[s._v("安装"),n("code",[s._v("vuepress")]),s._v("并"),n("code",[s._v("vuepress-theme-meteorlxy")]),s._v("记得添加next标签以安装1.x版本：")]),s._v(" "),n("div",{staticClass:"language-SH extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vuepress@next vuepress-theme-meteorlxy@next\n")])])]),n("p",[s._v("创建"),n("code",[s._v("src/_posts")]),s._v(" 等 Vuepress 的目录和配置文件。项目的结构如下：")]),s._v(" "),n("div",{staticClass:"language-SH extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("my-blog\n├── src "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主文件夹")]),s._v("\n│   ├── .vuepress "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置文件夹")]),s._v("\n│   │   ├── components "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义页面组件")]),s._v("\n│   │   ├── public "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置静态文件，比如图片")]),s._v("\n│   │   ├── styles "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 样式文件")]),s._v("\n│   │   └── config.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vuepress 配置文件")]),s._v("\n│   ├── _posts "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文章文件夹")]),s._v("\n│   │   ├── xxx.md\n│   │    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n│   └── about "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义页面文件夹")]),s._v("\n│       ├── index.md\n│       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n└── package.json\n")])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[n("code",[s._v("src/index.md")]),s._v("或"),n("code",[s._v("src/README.md")]),s._v("不是必需品。此主题将为您自动添加主页。")])]),s._v(" "),n("p",[s._v("将"),n("code",[s._v("script")]),s._v("字段添加到"),n("code",[s._v("package.json")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-SH extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev src"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build src --dest dist"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h3",{attrs:{id:"配置主题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置主题","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置主题")]),s._v(" "),n("p",[s._v("Config Vuepress和这个主题 "),n("code",[s._v("src/.vuepress/config.js")]),s._v(" ：\n")]),n("details",[n("summary",[s._v("单击以展开示例配置")]),n("p"),s._v(" "),n("div",{staticClass:"language-SH extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("module.exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    theme: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meteorlxy'")]),s._v(",\n    title: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'❤GaoSir 的个人博客'")]),s._v(",\n    description: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GaoSir 的个人博客'")]),s._v(",\n    locales: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            lang: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zh-CN'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    head: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            rel: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),s._v(",\n            href: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/favicon.ico'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    // 主题设置\n    themeConfig: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        // 主题语言\n        lang: Object.assign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuepress-theme-meteorlxy/lib/langs/zh-CN'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            prevPost: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'上一篇文章'")]),s._v(",\n            nextPost: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'下一篇文章'")]),s._v(",\n            notFound: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'哎呀，页面跑丢了！'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n        // 个人信息设置\n        personalInfo: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            nickname: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GaoSir'")]),s._v(",\n            description: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你若想要得到，就别只是期望。<br/> 人生短暂，经不起等待。'")]),s._v(",\n            email: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gaosir_801@163.com'")]),s._v(",\n            location: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'深圳'")]),s._v(",\n            avatar: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/images/tx.jpg'")]),s._v(",\n            sns: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                github: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    account: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Gaosirs'")]),s._v(",\n                    link: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/gaosirs'")]),s._v(",\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        // 头部设置\n        header: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            background: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                useGeo: true,\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            showTitle: true,\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        // 帖子的上次更新时间\n        lastUpdated: true,\n        // 导航栏设置\n        nav: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                text: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'首页'")]),s._v(",\n                link: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(",\n                exact: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                text: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'文章'")]),s._v(",\n                link: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/posts/'")]),s._v(",\n                exact: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                text: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'博客园'")]),s._v(",\n                link: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.cnblogs.com/gaosirs'")]),s._v(",\n                exact: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                text: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'关于我'")]),s._v(",\n                link: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/about/'")]),s._v(",\n                exact: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        // 评论设置\n        comments: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            platform: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github'")]),s._v(",\n            owner: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v(",\n            repo: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v(",\n            clientId: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v(",\n            clientSecret: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v(",\n            autoCreateIssue: process.env.NODE_ENV "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        // 分页配置\n        pagination: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            perPage: 5\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),n("p",[s._v("运行"),n("code",[s._v("script")]),s._v("以生成您的博客网站：")]),s._v(" "),n("div",{staticClass:"language-SH extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# develop")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n")])])]),n("h3",{attrs:{id:"写第一篇帖子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写第一篇帖子","aria-hidden":"true"}},[s._v("#")]),s._v(" 写第一篇帖子")]),s._v(" "),n("div",{staticClass:"language-SH extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("---\ncategory: hello\ntags:\n  - world\ndate: 2019-04-28\ntitle: Hello, world\nvssue-title: Hello, world\n---\n\nThis is my first post.\n\nThe content above "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" is the excerpt, "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" will be displayed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the posts list.\n\nThe content below "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" will only be displayed when viewing this post, and will not be displayed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the posts list.\n")])])]),n("h3",{attrs:{id:"最终效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最终效果","aria-hidden":"true"}},[s._v("#")]),s._v(" 最终效果")]),s._v(" "),n("p",[n("img",{attrs:{src:"/Blog/images/details.png",alt:"最终效果图"}})]),s._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress-theme-meteorlxy.meteorlxy.cn/"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://v1.vuepress.vuejs.org/zh/"),n("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=e.exports}}]);