import mysql from 'mysql'
import dbConfig from '../config/db'

// 创建数据库链接
const connection = mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    port:dbConfig.PORT,
    password:dbConfig.PASSWORD,
    database:dbConfig.DATABASE
});

export default connection




