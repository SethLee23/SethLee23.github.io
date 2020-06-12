const moment = require('moment');
module.exports = {
  base: '/',
  title: 'seth\'s blog',
  description: 'seth\'s blog,简单的笔记',
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
    ]
  ]
}