#/bin/bash

env=$1

ps -a | grep 'edp webserver' | grep -v 'grep' | cut -d " " -f2 | xargs kill

#开发模式
if [ "$env" != 'preview' ]; then
    NODE_ENV=$env edp webserver start &
    node build/dev-server.js
#预览模式
else
    NODE_ENV=preview edp webserver start
fi
