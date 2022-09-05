const query = require('../../model/index')

// 查询分类
const Category=async(req,res,next)=>{
    let sql=`select c_id,c_name from class`
    try {
        let data=await query(sql)
        res.json({
            code:200,
            message:'okok',
            data
        })
    } catch (err) {
        
    }
}
// 修改分类
const UpdateCategory=async(req,res,next)=>{
    let sql=`UPDATE class set c_name='${req.query.c_name}' 
    WHERE c_id='${req.query.c_id}'`
    try {
        let data=await query(sql)
        res.json({
            code:200,
            message:'okok'
        })
        
    } catch (err) {
        
    }
}
// 添加分类
const AddCategory=async(req,res,next)=>{
    let sql=`INSERT INTO class(c_id,c_name)
    VALUES(REPLACE(UUID(),"-",""),"${req.body.c_name}")`
    let data=await query(sql)
    res.json({
        code:200,
        message:'okok'
    })
}
// 删除分类,表被依赖，不删
const DeleteCategory=async(req,res,next)=>{
//     let sql=`DELETE from class 
//     WHERE c_id='${req.query.c_id}'`
//     let data=await query(sql)
//     res.json({
//         code:200,
//         message:'okok'
//     })
}

module.exports={Category,UpdateCategory,AddCategory,DeleteCategory}