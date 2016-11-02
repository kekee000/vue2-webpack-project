/**
 * @file mock list列表
 * @author mengke01(kekee000@gmail.com)
 */

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
                },
                {
                    id: '2', // 编号
                    name: '韦小宝', // 名称
                    nickname: '伟爵爷',
                    phone: '2222'
                }
            ]
        }
    }
}
