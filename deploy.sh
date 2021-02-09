#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd blog/.vuepress/dist

# 如果是发布到自定义域名
# echo 'sethlee.site' >CNAME

# git init
git add -A
git commit -m 'deploy'

# git pull origin master
# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:SethLee23/SethLee23.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:SethLee23/vuepress-blog.git master:gh-pages
# git push -f git@github.com:sethlee23/vuepress-blog.git master:gh-pages

cd -
