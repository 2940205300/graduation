const express = require('express')
const {api, index ,type,detail} = require('../controller/index');
const {login,register} =require('../controller/login')
const permission = require('../controller/permission');
const router = express.Router({
    caseSensitive: false//路径是否区分大小写
});



// 登录
router.post('/login',login)
// 注册
router.post('/register',register)
// 主页精选图书
router.get('/',api)
// 分类
router.get('/index', index)
// 点击分类图书,搜索
router.get('/index/list',type)
// 图书详情
router.get('/index/list/detail',detail)
// 获取权限
router.get('/permission',permission)












module.exports = router













