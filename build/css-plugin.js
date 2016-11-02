/**
 * @file css设置 public path的时候路径会被替换成{%$feRoot%}再替换回去
 * @author mengke01(kekee000@gmail.com)
 */

var chalk = require('chalk')

/**
 * css路径处理器
 *
 * @param {Object} options 处理参数
 * @param {Function} replacer 资源替换处理函数
 */
function TPLPlugin(options) {
    this.options = Object.assign({
        /**
         * 路径替换处理，替换{%$feRoot%}为相对路径
         *
         * @param  {string} content 模板内容
         * @return {string}         渲染后内容
         */
        replacer: function (content) {
            return content.replace(/\{%\$feRoot%\}\/asset/g, '..');
        },
        /**
         * 路径替换匹配器，用来匹配用于替换的文件名
         *
         * @param  {string} file 文件名
         * @return {boolean}
         */
        matcher: function (file) {
            return !!file.match(/\.css$/);
        }
    }, options);
}

TPLPlugin.prototype.apply = function(compiler) {
    var replacefeRoot = this.options.replacer;
    var matchfeRoot = this.options.matcher;

    compiler.plugin('compilation', (compilation) => {
        compilation.plugin('additional-assets', (callback) => {
            var  cssFiles = Object.keys(compilation.assets).filter(matchfeRoot);
            for (var i = 0, l = cssFiles.length; i < l; i++) {
                var concatSource = compilation.assets[cssFiles[i]].children;
                concatSource.forEach((sourceMapSource) => {
                    if (sourceMapSource._value) {
                        sourceMapSource._value = replacefeRoot(sourceMapSource._value);
                    }
                });
                console.log('replace feRoot', chalk.green(cssFiles[i]));
            }
            callback();
        });
    });
};

module.exports = TPLPlugin;
