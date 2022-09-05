const fs=require('fs') 
module.exports= function file(url){
    fs.unlink('./public/assets/uploads/images/'+url, function (error) {
        // console.log(url);
        if (error) {
            console.log(error);
            return false;
        }
        console.log('删除旧图片成功');
    })
}