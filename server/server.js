const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const session = require('express-session')



const app = express()
const router = require('./routers/index')
const PersonalRouter  = require('./routers/personal')
const AdminRouter=require('./routers/admin')


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())



// 跨域
app.all('*', function (req, res, next) {  //深刻了解这次错误，以后不会再犯，跨域请求允许
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
    // 这里最好不用*通配符，之前就这报错，写上指定域名例如 http://127.0.0.1:8080
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-control-Allow-Credentials", "true");
    next();
});

app.use(express.static(path.join(__dirname, './public')))
app.use('/api', router)
app.use('/api/personal',PersonalRouter)
app.use('/api/admin',AdminRouter)






app.listen(3000, () => {
    console.log('localhost:3000');
})