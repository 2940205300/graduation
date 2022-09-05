const multer=require('multer')
const path=require('path')
const {currentTime} = require('./moment')
const UUID=require('uuid')
//设置保存规则
var storage = multer.diskStorage({
    //destination：字段设置上传路径，可以为函数
    destination: path.resolve(__dirname, '../public/assets/uploads/images'),

    //filename：设置文件保存的文件名
    filename: function(req, file, cb) {
        let extName = file.originalname.slice(file.originalname.lastIndexOf('.'))
        // let fileName = UUID.v1()
        let fileName=currentTime
        cb(null, fileName + extName)
    }
})


//创建 multer 实例
var imageUploader = multer({ 
    storage: storage,
    // fileFilter: imageFilter,
    // limits: imageLimit
}).any()
/**
 * any() 对应 req.files
 * single() 对应 req.file
 */

module.exports=imageUploader