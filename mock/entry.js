/**
 * @file mock app入口数据
 * @author mengke01(kekee000@gmail.com)
 */

module.exports = function (req) {
    return {
        // 模板数据
        tplData: {
        },
        // 用户数据
        user: {
            userName: 'vue2',
            role: 'admin'
        },
        // fe根目录
        feRoot: '.',
        // 其他数据
        extData: {
            pid: 123
        }
    }
}
