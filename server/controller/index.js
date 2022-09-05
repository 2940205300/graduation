const query = require('../model/index')

// 主页下方精选
const api = async (req, res, next) => {
    let sql = `select*from goods limit 8`
    try {
        let data = await query(sql)
        res.json({ data: data })

    } catch (err) {
        throw err
    }
}
// 分类
const index = async (req, res, next) => {
    let sql = `select c_id,c_name 
              from class 
              order by c_id`
    try {
        let data = await query(sql)
        res.json({ data: data })

    } catch (err) {
        throw err

    }
}
// 查询
const type = async (req, res, next) => {
    // console.log(req.query.type,req.query.name);
    const { type, name } = req.query
    let sql = `select g_id,g_name,
               g_info,g_author,g_press,
               g_fontnum, g_price, g_img
               from goods 
               join class using(c_id)
               where c_name="${type}" 
               or g_name like "%${name}%" 
               or g_author like "%${name}%"`
    try {
        let data = await query(sql)
        res.status(200).json(data)
    } catch (error) {

    }
}
// 详情
const detail=async(req,res,next)=>{
    res.status(200).json({
        code:200,
        data:'2323233'
    })
}




module.exports = { api, index, type ,detail}