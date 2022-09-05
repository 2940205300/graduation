/*
 * @Description: 
 * @Autor: deng
 * @Date: 2021-06-04 20:17:36
 * @LastEditors: deng
 * @LastEditTime: 2021-06-22 23:00:54
 */
const user = require('../permission/user_permission.json')
const admin = require('../permission/admin_permission.json')




const permission = (req, res, next) => {
    // console.log(req.query);
    if (req.query.name == 'admin') {
        res.send(admin)
    }
    res.send(user)
}








module.exports = permission