---
title: element ui 按需引入
date: 2020-06-14
author: Seth
location: Wuhan
tags:
  - JavaScript
  - Vue
  - Element UI

siderbar: 'auto'
---

# 在 Vue Cli3 中引入按需加载 Element UI

babel.config.js 配置

```js
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: ['es6.promise', 'es6.symbol'],
      },
    ],
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
```
