const moment = require('moment');
const pluginConfig = require('./config/pluginConfig')
const headConfig = require('./config/headConfig')
module.exports = {
  base: '/',
  title: 'seth\'s blog',
  description: 'seth\'s blog,简单的笔记',
  "frontmatter": {
    "sidebar": "auto"
  },

  head: headConfig,
  plugins: pluginConfig,

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
    // sidebar: 'auto',
    lastUpdated: '上次更新时间',//上次更新时间
    // Please keep looking down to see the available options.
  },
}