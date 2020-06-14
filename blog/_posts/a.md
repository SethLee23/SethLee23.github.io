---
title: Vuepress 搭建博客
date: 2020-06-13
author: seth
location: Wuhan 
tags: 

  - PWA
  - SEO
  - Vssue
siderbar: 'auto'
---
12121212121212121212121

<ClientOnly>
  <demo/>
</ClientOnly>

> 搭建vuepress博客

## 集成功能

| 序号        | 功能          |插件|
| ------------- |:-------------:|:-------------:|
| 0             | 发布到自定义域名 |-|
| 1             | SEO |SEO|
| 2             |    更新提示/离线访问   | PWA/Manifest|
| 3             |   评论    |Vssue|
| 4             |   回到顶部    |backToTop|

My content.
ack
> This is official blog theme.

<ClientOnly>
<Vssue :title="$title" />
</ClientOnly>
