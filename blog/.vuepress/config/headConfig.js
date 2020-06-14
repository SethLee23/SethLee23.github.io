const headConfig =  [
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
]
module.exports = headConfig