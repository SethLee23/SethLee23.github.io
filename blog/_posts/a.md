---
title: Vuepress 搭建博客集成PWA,Vssue,谷歌分析,SEO,Travis Ci
date: 2020-06-14
author: seth
location: Wuhan
tags:
  - PWA
  - SEO
  - Vssue
siderbar: 'auto'
---

<!-- <ClientOnly>
  <demo/>
</ClientOnly> -->

> 搭建 vuepress 博客

## 集成功能

| 序号 |       功能        |          插件           |
| ---- | :---------------: | :---------------------: |
| 0    | 发布到自定义域名  |            -            |
| 1    |        SEO        |   vuepress-plugin-seo   |
| 2    | 更新提示/离线访问 |   plugin-pwa/Manifest   |
| 3    |       评论        |          Vssue          |
| 4    |     回到顶部      |   plugin-back-to-top    |
| 5    |   接入谷歌分析    | plugin-google-analytics |
| 6    | 接入 twitter-card |            -            |

<ClientOnly>
  <Vssue :title="$title" />
</ClientOnly>
