const query = require('../model/index')
const md5 = require('md5')
const jwt = require('jsonwebtoken')

const key = 'denglu';


// 登录
const login = async (req, res, next) => {
    const token = jwt.sign(req.body.name, key)
    const pass = md5(req.body.pwd + '3344');
    let sql = `select u_id, u_name,u_pwd 
               from users
               where u_name="${req.body.name}"
               and u_pwd="${pass}"`
    try {
        let data = await query(sql)
        //账号或密码错误，查询用户不存在
        console.log(data)
        if (data.length == 0 || data == "") {
            console.log("发出code=201,查询用户不存在")
            res.status(200).send({
                code: 201,
                error: '没有找到'
            })
        } else {//查询到该用户账号密码正确
            console.log("发出code=200 查询用户存在")
            res.status(200).json({
                code: 200,
                data,
                token

            })

        }

    } catch (err) {
        res.status(201).send({
            code: 500,
            error: "数据查询失败"
        })
    }


}
// 注册
const register = async (req, res, next) => {
    const pass = md5(req.body.pwd + '3344')
    let sql = `replace into users(u_id,u_name,u_pwd) 
               values(replace(UUID(),"-",''),"${req.body.name}","${pass}")`
    try {
        let data = await query(sql)
        res.status(200).send({
            code: 200,
            data,
            message: '注册成功'

        })
    } catch (err) {

    }
}

module.exports = {
    login, register
}