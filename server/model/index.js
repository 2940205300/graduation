var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 5,//一次创建5个连接,默认10个
    host: 'localhost',
    port:3306,
    user: 'root',
    password: '7788',
    database: 'bookstore',
    multipleStatements: true
});

//sql:sql语句 values:data
function query(sql, values) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.getConnection((err, connection) => {
                if (err) reject(err)
                // console.log(err);
                connection.query(sql, values, (err, results, fields) => {
                    if (err) {
                        reject(err)
                        // console.log(err);
                        // throw err
                    }
                    resolve(results)
                    connection.release() //连接不再使用，返回到连接池
                })
            })
        })
    }, 100)
}





module.exports =query



