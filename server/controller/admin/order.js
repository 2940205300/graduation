const query=require('../../model/index')

const Order=async(req,res,next)=>{
    let sql=`SELECT orders.o_id,orders.u_id,g_name,
    date_format(o_time ,'%Y-%m-%d %H:%i:%s' ) as o_time,
    o_remark,o_name,o_address,o_phone,o_status,u_name
    from orders
    JOIN goods 
    USING(g_id)
    JOIN users
    USING(u_id)
    order by o_time desc`
    try {
        const data=await query(sql)
        res.json({
            code:200,
            message:'okok',
            data
        })
    } catch (err) {
        
    }
}




module.exports={Order}