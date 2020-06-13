const moment = require('moment');
module.exports = {
  base: '/',
  title: 'seth\'s blog',
  description: 'seth\'s blog,简单的笔记',
  "frontmatter": {
    "sidebar": "auto"
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'keywords', content: '博客, Vuepress, Seth, 技术' }],
    ['meta', { name: 'author', content: 'Seth' }],
  ],

  theme: '@vuepress/theme-blog',
  themeConfig: {
    logo: '/assets/img/logo.png',
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Nuxt', link: '/nuxt/' },
    //   {
    //     text: 'External',
    //     link: 'https://github.com/',
    //     items: [
    //       {
    //         text: 'Chinese',
    //         link: '/language/chinese/',
    //         items: [
    //           { text: 'Group1', items: [/*  */] },
    //           { text: 'Group2', items: [/*  */] }
    //         ]
    //       },
    //       { text: 'Japanese', link: '/language/japanese/' }
    //     ]
    //   },
    // ],
    sidebar: 'auto',
    lastUpdated: '上次更新时间',//上次更新时间
    // Please keep looking down to see the available options.
  },
  plugins: [
    '@vuepress/pwa',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment().format('lll')
        }
      }
    ],
    // ['seo', {
    //   siteTitle: (_, $site) => $site.title,
    //   title: $page => $page.title,
    //   description: $page => $page.frontmatter.description,
    //   author: (_, $site) => $site.themeConfig.author,
    //   tags: $page => $page.frontmatter.tags,
    //   twitterCard: _ => 'seth前端博客',
    //   type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
    //   url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
    //   image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
    //   publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
    //   modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    // }]
  ]
}