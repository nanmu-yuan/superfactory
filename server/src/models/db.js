import mysql from 'mysql'
import dbConfig from '../config/db'

// 配置数据库参数
const options= {
    host:dbConfig.HOST,
    user:dbConfig.USER,
    port:dbConfig.PORT,
    password:dbConfig.PASSWORD,
    database:dbConfig.DATABASE
}
// 建立链接池
const  pool  = mysql.createPool(options);


/**
 * select 和 delete 操作
 * @param sql sql语句
 * @param callback 正常查询后调用回调函数
 */
const _selectDelete=(sql,callback)=>{
    // 数据库链接
    pool.getConnection(function(err,conn){
        if(err){
            console.log('CONNECT ERROR:',err.message);
            callback(err,null,null);
        }else{
            conn.query(sql,function(errs,rows,fields){
                // 释放连接
                conn.release();
                //调用回调函数
                callback(errs,rows,fields);
            })
        }
    })
}
const _updateInsert = (sql,params,callback)=>{
    pool.getConnection(function(err,conn){
        if(err){
            console.log('CONNECT ERROR:',err.message);
            callback(err,null,null);
        }else{
            conn.query(sql,params,function(err,rows,fields){
                // 释放链接
                conn.release();
                // 回调查询后的值
                callback(err,rows,fields);
            })
        }
    })
}


/**
 * sql 重载函数,区分有参数和无参的两种情况
 */
exports.query =  function () { 
    let  len = arguments.length,sql="",cb='';
    if(len==2){
        sql = arguments[0];
        cb = arguments[1];
        _selectDelete(sql,cb);
    }else if(len==3){
        sql= arguments[0];
        params = arguments[1];
        cb = arguments[2];
        _updateInsert(sql,params,cb)
    }else{
        console.log('ERROR:','参数不对')
    }
 }



