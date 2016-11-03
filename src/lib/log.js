/**
 * @file 运营活动类非结果页日志组件
 * @author sunwei11@baidu.com,
 *         mengke01(kekee000@gmail.com)
 */

/* eslint-disable fecs-camelcase */

/**
 * 默认的参数配置
 *
 * @type {Object}
 */
var defaultOptions = {
    url: 'https://m.baidu.com/tc?tcreq4log=1&',
    data: {
        ct: 7, // 标记统计类型
        cst: 1, // 配合ct参数使用
        oper_act: 'wise', // 操作码
        page_id: Date.now(), // pvid
        from: (function () {
            var match = location.search.match(/\bfr=([\w-.%]+)\b/);
            return match ? match[1] : '-';
        })(), // 来源
        fm: '-' // 标识操作类型
    }
};

/**
 * log 的fm类型
 * @type {Object}
 */
const logFMType = {
    BTN: 'beha',
    TAB: 'beha',
    LINK: 'click'
};

/**
 * 发送日志请求
 *
 * @memberof module:log
 * @method module:log~send
 * @param {string} url 日志完整地址
 * @inner
 */

function send(data) {
    if (!defaultOptions.url) {
        return;
    }
    const url = defaultOptions.url + $.param($.extend({}, defaultOptions.data, data));
    const img = document.createElement('img');
    img.src = url;
}


const onClick = function (e) {
    var target = e.target;
    var logReg = /\bWA_LOG_(BTN|TAB|LINK)\b/;
    while (target && target !== document) {
        var match = target.className.match(logReg);
        if (match) {
            var data = {
                fm: logFMType[match[1]] || '-',
                extra: target.getAttribute('data-click')
                    || $(target).closest('[data-click]').attr('data-click')
                    || '-'
            };

            send(data);
            break;
        }
        target = target.parentNode;
    }
};

module.exports = {

    /**
     * 配置项
     *
     * @see module:log~options
     * @param {Object} ops 可配置项
     * @return {module:log} log
     */
    config: function (ops) {
        $.extend(true, defaultOptions, ops);
        return this;
    },

    /**
     * 开始监听页面点击日志
     *
     * @return {module:log} log
     * @fires module:log#start
     */
    start: function () {
        document.addEventListener('click', onClick, true);
        return this;
    },

    /**
     * 停止监听页面点击日志
     *
     * @return {module:log} log
     */
    stop: function () {
        document.removeEventListener('click', onClick, true);
        return this;
    },

    /**
     * 手动发送统计请求
     *
     * @param {Object} data 要替换的日志参数
     * @return {Object} this 当前发送的日志参数
     */
    send: function (data) {
        send(data);
        return this;
    },

    init: function () {
        this.start();

        // 首屏pv
        this.send({
            fm: 'se'
        });
    }
};
