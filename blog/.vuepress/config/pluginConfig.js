const secret = require('./secret')
const pluginConfig = [
  ['sitemap', {
    hostname: 'https://sethlee.site'
  }],
  ["vuepress-plugin-auto-sidebar"],
  ['@vuepress/medium-zoom',{
    selector: 'img.zoom-custom-imgs',
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    options: {
      margin: 16
    }
  }],
  // 谷歌分析
  [
    '@vuepress/google-analytics',
    {
      'ga': secret.ga // UA-00000000-0
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
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
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
  // [
  //   '@vuepress/last-updated',
  //   {
  //     transformer: (timestamp, lang) => {
  //       // 不要忘了安装 moment
  //       const moment = require('moment')
  //       moment.locale('zh-cn')
  //       return moment().format('lll')
  //     }
  //   }
  // ],
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
module.exports = pluginConfig