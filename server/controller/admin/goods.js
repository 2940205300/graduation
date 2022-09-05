const query = require('../../model/index')
const drop= require('../../model/file')
const logger = require('../../model/lg_4js')

const Goods = async (req, res) => {
    let sql = `SELECT g_id,g_name,g_author,c_name,
    g_price,g_press,date_format(g_time ,'%Y-%m-%d ' ) as g_time,
    g_fontnum,g_img ,g_info ,up_time 
    FROM goods 
    join class using(c_id)
    order by up_time desc`
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

// 删除图书
const Delete = async (req, res, next) => {
    const { id, img } = req.query
    let sql = `DELETE FROM goods where g_id="${id}"`
    await query(sql)
    file(img)
    res.json({
        code: 200,
        message: 'okok'
    })
}
// 添加图书
const AddGoods = async (req, res, next) => {
    // console.log(req.files[0].filename); //没有参数就是undefined
    // console.log(req.body);
    // console.log(req.files);
    const { g_name, c_id, g_price, g_author, g_press, g_time, g_fontnum, g_info } = req.body;
    const imgUrl = req.files[0].filename
    let sql = `REPLACE INTO goods(g_id,c_id,g_name,g_info,g_author,g_press,g_fontnum,g_time,g_price,g_img,up_time)
   VALUES(REPLACE(UUID(),"-",""),"${c_id}" ,"${g_name}","${g_info}","${g_author}","${g_press}","${g_fontnum}","${g_time}","${g_price}","${imgUrl}",NOW())`
    try {
        let data = await query(sql)
        res.json({
            code: 200,
            message: 'okok'

        })
    } catch (err) {
        res.send({
            code: 500
        })
    }
}
// 修改图书
const UpdateGoods = async (req, res, next) => {
    const { g_id, c_id, g_name, g_price, g_author, g_press, g_time, g_fontnum, g_info, g_img } = req.body
        let sql2 = `UPDATE goods set
        c_id="${c_id}",
        g_name="${g_name}",
        g_price="${g_price}",
        g_author="${g_author}",
        g_press="${g_press}",
        g_time="${g_time}",
        g_fontnum="${g_fontnum}",
        g_info="${g_info}",
        WHERE g_id="${g_id}"`
    console.log(req.body);
    if (req.files.length == 0) { //没上传
        let data = await query(sql2);
        res.json({
            code: 200,
            message: '修改图书ok'
        })
    } else {
        const imgUrl = req.files[0].filename;
        // console.log(imgUrl);
        let sql1 = `UPDATE goods set
        c_id="${c_id}",
        g_name="${g_name}",
        g_price="${g_price}",
        g_author="${g_author}",
        g_press="${g_press}",
        g_time="${g_time}",
        g_fontnum="${g_fontnum}",
        g_info="${g_info}",
        g_img="${imgUrl}"
        WHERE g_id="${g_id}"`
        let data = await query(sql1)
        drop(g_img)
        // logger.info(req.body)
        res.json({
            code: 200,
            message: '修改图书ok'
        })

    }
}





module.exports = { Goods, AddGoods, Delete, UpdateGoods }