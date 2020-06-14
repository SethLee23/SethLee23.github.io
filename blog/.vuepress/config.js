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
    //配置pwa
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon/apple-icon-152x152-dunplab-manifest-1314.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/apple-icon-144x144-dunplab-manifest-1314.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
    // 谷歌分析
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-169294301-1' // UA-00000000-0
      }
    ],
    // 回到顶部
    ['@vuepress/back-to-top'],
    //配置评论
    [
      '@vssue/vuepress-plugin-vssue',{
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',

        // 其他的 Vssue 配置
        owner: 'SethLee23',
        repo: 'vuepress-blog',
        clientId: 'f155013196f57ca349b6',
        clientSecret: '4010ca4573199c9b5013043d67c017e110bb0f9e',
        autoCreateIssue: true,
        locale: 'zh-CN'
      },
    ],
    // 配置pwa
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '有新内容更新', // defaults to 'New content is available.'
        buttonText: '刷新', // defaults to 'Refresh'}
      }
    }
    ],
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
    // 配置seo
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'seth前端博客',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }]
  ]
}