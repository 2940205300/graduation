const express = require('express');
const { address, AddAddress,UpdateAddAddress,DeleteAddress, Shop } = require('../controller/personal/personal_address');
const { Order, CancelOrder,AddOrder } = require('../controller/personal/personal_order');
const PersonalRouter = express.Router({
    caseSensitive: true//路径是否区分大小写
});

// 用户
// 购买时获取地址
PersonalRouter.post('/shop',Shop)
// 用户地址
PersonalRouter.get('/address',address)
// 添加地址
PersonalRouter.post('/AddAddress',AddAddress);
// 修改地址
PersonalRouter.put('/updateAddAddress',UpdateAddAddress);
// 删除地址
PersonalRouter.delete('/deleteAddAddress',DeleteAddress);
// 用户订单
PersonalRouter.post('/order',Order);
// 提交订单
PersonalRouter.post('/addorder',AddOrder);
// 取消订单
PersonalRouter.patch('/cancelorder',CancelOrder);






module.exports=PersonalRouter