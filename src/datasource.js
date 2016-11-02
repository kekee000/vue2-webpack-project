/**
 * @file  数据源
 * @author mengke01(kekee000@gmail.com)
 */
import DataSource from './lib/DataSource'

module.exports = new DataSource({
    resources: [
        {
            'name': 'login',
            'url': '/api/login'
        },
        {
            'name': 'upload',
            'url': '/api/upload'
        },
        {
            'name': 'upload-del',
            'url': '/api/upload/del'
        },
        {
            'name': 'list',
            'url': '/api/home/list'
        },
        {
            'name': 'del',
            'url': '/api/home/del'
        },
        {
            'name': 'detail',
            'url': '/api/home/detail'
        }
    ]
})
