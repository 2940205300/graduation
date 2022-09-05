const log4js = require("log4js");
log4js.configure({ //对日志输出进行配置
     appenders:{
        console:{type:'console'},
        file:{
            type:'file',
            filename:'all.log',
            layout:{
                type:'pattern',
                pattern:'%d{yyyyMMdd hh:mm:ss} {%p} %m'
            }
        }
    },
    categories:{
        default:{
            appenders:['console','file'],
            level:'debug'　　　　　　
        }
    }//定义日志输出的规则，然后调用之前定义好的appenders进行输出（定义输出的规则）
});


module.exports=log4js.getLogger();//暴露log4js模板，其他功能点才能应用 

// const logger = getLogger("log") //获取logger对象，使用logger对象进行各级别的日志打印
// logger.info("Hello to file");

