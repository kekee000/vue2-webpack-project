vue2项目模板
---

框架：vue2 + webpack + edp mock + bootstrap3
vue2单页面框架，适用于快速搭建spa后台系统

## 使用

``` bash
# 初始化
npm install

# 启动调试
npm run dev

# 启动预览
npm run dev

# 启动编译
npm run build
```

### mock
使用`edp webserver`作为mock方案，配置mock目录 中的mock文件实现ajax数据模拟
例如：
get: /api/home/list
配置：mock/api/home/list.js实现mock映射：
```
module.exports = function (req) {
    return {
        status: 0,
        data: {
            list: [
                {
                    id: '1', // 编号
                    name: '张无忌', // 名称
                    nickname: '张教主',
                    phone: '123456'
                }
            ]
        }
    }
}
```
### ui
默认搭配`jquery + bootstrap3`作为基础ui库，可以自行选择 [element ui](https://github.com/ElemeFE/element)或者其他ui框架。

### 图标和图片
建议使用webfont和svg作为图标和矢量背景方案，使用[fontstore](http://fontstore.baidu.com/)管理项目图标.

### log
使用运营活动类非结果页日志组件`log.js`，打点的时候使用：

```
    v-log="{act:'link'}" // 链接打点
    v-log.tab="'tab'" // 其他类型，支持`tab`,'btn'
```

### 编译
1. `index.html`支持smarty变量，在调试时自动注入`mock/entry.js`中的数据，编译产出`index.tpl`作为后台入口。
2. 静态资源使用`{%$feRoot%}`作为资源地址，方便部署上线。

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
