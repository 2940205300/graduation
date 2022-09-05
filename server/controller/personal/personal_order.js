const query = require('../../model/index')

// 用户查看订单管理
const Order = async (req, res, next) => {
    let sql = `SELECT orders.o_id,orders.u_id,g_name,
               date_format(o_time ,'%Y-%m-%d %H:%i:%s' ) as o_time,
               o_remark,o_name,o_address,o_phone,o_status
               from orders
               JOIN goods 
               USING(g_id)
               where orders.u_id='${req.body.u_id}'
               ORDER BY o_time desc`
    try {
        let data = await query(sql)
        res.json({
            code: 200,
            message: 'ok',
            data,
        })
    } catch (err) {
    }
}
// 提交订单
const AddOrder = async (req, res, next) => {
    console.log(req.body);
    // const { g_id, u_id,o_name,o_address,o_phone } = req.body;
    // let sql = `INSERT INTO orders (o_id,g_id,u_id,o_name,o_address,o_phone,o_time)
    //            VALUES(REPLACE(UUID(),"-",""),"${g_id}","${u_id}","${o_name}","${o_address}","${o_phone}",NOW())`
    // try {
    //     let data = await query(sql)
    //     res.json({
    //         code: 200,
    //         message: '提交订单成功'
    //     })
    //     console.log('提交订单成功');
    // } catch (err) {

    // }
}
// 取消订单
const CancelOrder = async (req, res, next) => {
    let sql = `UPDATE orders set o_status=${req.body.status}
    WHERE o_id='${req.body.id}'`
    try {
        let data = await query(sql)
        res.json({
            code: 200,
            message: 'okokok'
        })

    } catch (err) {

    }
}


module.exports = { Order, AddOrder, CancelOrder }