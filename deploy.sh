#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e



git pull 

git add .
# commit参数
git commit -m "$*"
# commit默认
# git commit -m "upd"

git push -u origin master

cd -