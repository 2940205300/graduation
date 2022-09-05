const query = require('../../model/index')

// 购买时请求的地址
const Shop = async (req, res, next) => {
    let sql = `select a_id,a_name,a_address,a_phone FROM address
           WHERE u_id='${req.body.u_id}'`
    try {
        let data = await query(sql)
        res.json({
            code: 200,
            message: 'okok',
            data
        })
    } catch (err) {

    }
}
// 个人地址管理
const address = async (req, res) => {
    const sql = `SELECT a_id,address.u_id,a_name,a_address,a_phone,u_name from address
    join users
    on address.u_id=users.u_id
    where u_name='${req.query.user}'`
    try {
        let data = await query(sql)
        res.json({
            code: 200,
            data: data
        })
    } catch (err) {
    }
}
// 增加
const AddAddress = async (req, res, next) => {
    const { name, address, phone, u_id } = req.body
    const sql = `INSERT INTO address(a_id,u_id,a_name,a_address,a_phone)
               VALUES(REPLACE(UUID(),"-",""),"${u_id} ","${name}","${address}","${phone}")`
    let sql2 = `select a_id,u_id,a_name,a_address,a_phone
               from address
               join users
               using(u_id)
               where u_id="${u_id}"`
    try {
        let data = await query(sql)
        let address = await query(sql2)
        res.json({
            code: 200,
            msg: '新增地址成功',
            address
        })
    } catch (err) {
        res.json({
            code: 500,
            msg: '服务器出错'
        })
        return

    }
}
// 修改
const UpdateAddAddress = async (req, res, next) => {
    const { name, address, phone, a_id } = req.body.data;
    const sql = ` UPDATE address
                  set a_name='${name}',
                  a_address='${address}',
                  a_phone='${phone}'
                  where a_id='${a_id}'`
    try {
        let data = await query(sql)
        // console.log(req.body.data);
        res.json({
            code: 200,
            message: '修改成功'
        })
    } catch (err) {
    }
}
// 删除 
const DeleteAddress = async (req, res, next) => {
    const sql = `DELETE from address where a_id='${req.query.a_id}'`
    try {
        let data = await query(sql)
        res.json({
            code: 200,
            message: '删除成功'
        })
    } catch (err) {
    }
}


module.exports = { address,Shop, AddAddress, UpdateAddAddress,DeleteAddress }