/**
 * @file tpl模板插件，用来处理首页smarty tpl模板变量
 * @author mengke01(kekee000@gmail.com)
 */

require('jsmart');
var chalk = require('chalk')

/**
 * 渲染smarty模板变量
 * @param  {string} content 模板内容
 * @param  {Object} data    数据
 * @return {string}         渲染后内容
 */
function render(content, data) {
    jSmart.prototype.left_delimiter = '{%';
    jSmart.prototype.right_delimiter = '%}';
    var render = new jSmart(content);
    render.registerPlugin('modifier', 'json_encode', function (data) {
        return JSON.stringify(data)
    });
    return render.fetch(data);
}

/**
 * tpl插件
 *
 * @param {Object} options 插件参数
 * @param {Object} options.data 渲染参数
 */
function TPLPlugin(options) {
    this.data = options.data || {};
}

TPLPlugin.prototype.apply = function(compiler) {

    compiler.plugin('compilation', (compilation) => {
        //console.log('The compiler is starting a new compilation...');
        // html-webpack-plugin 变量注入
        compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
            console.log('inject tpl data!', chalk.green(htmlPluginData.plugin.options.filename));
            htmlPluginData.html = render(htmlPluginData.html, this.data);
            callback(null, htmlPluginData);
        });
    });
};

module.exports = TPLPlugin;
