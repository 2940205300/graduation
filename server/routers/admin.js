const express = require('express');
const { Category, UpdateCategory, AddCategory ,DeleteCategory} = require('../controller/admin/category');
const { Goods, AddGoods, Delete ,UpdateGoods} = require('../controller/admin/goods');
const { Order } = require('../controller/admin/order');
const AdminRouter = express.Router({
    caseSensitive: true//路径是否区分大小写
});
const imageUploader =require('../model/multer')
const multer = require('multer')
const upload = multer({ dest: '../assets/uploads/images' })


// 分类管理
AdminRouter.get('/category',Category)
// 编辑分类
AdminRouter.get('/updatecategory',UpdateCategory)
// 添加分类
AdminRouter.post('/addcategory',AddCategory)
// 删除分类
AdminRouter.delete('/deletecategory',DeleteCategory)
// 订单管理
AdminRouter.get('/order', Order)
// 图书管理
AdminRouter.get('/goods',Goods)
// 添加图书
AdminRouter.post('/addgoods',imageUploader,AddGoods)
// 删除图书
AdminRouter.delete('/deletegoods',Delete)
// 修改图书
AdminRouter.post('/updategoods',imageUploader,UpdateGoods)











module.exports=AdminRouter




