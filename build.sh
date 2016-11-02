#/bin/bash
# 版本
VERSION=$(date "+%Y%m%d%H%M")
# 输出目录
OUTPUT_PATH='./output'
mkdir -p $OUTPUT_PATH
rm -rf $OUTPUT_PATH/*

node build/build.js

# 移动
echo 'moving builded files'
mv ./dist $OUTPUT_PATH
mv $OUTPUT_PATH/dist/index.html $OUTPUT_PATH/index.tpl

[ -d ./dep ] && cp -r ./dep $OUTPUT_PATH/dist

# cat index.tpl | sed "s#{version}#$VERSION#g" > $OUTPUT_PATH/index.tpl
# cat login.tpl | sed "s#{version}#$VERSION#g" > $OUTPUT_PATH/login.tpl

echo 'build done'
