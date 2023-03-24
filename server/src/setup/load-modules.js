import express from 'express';
import path from "path";
import bodyParser from 'body-parser';
import cors from 'cors'
// 启动项目 安装插件
export default function(server){
/**
 * @params express.urlencoded;解决表单格式的传参方式
 * @params express.json；解析json格式的参数 
 */
    server.use(express.urlencoded({extended:true}));
    server.use(express.json());


// 用cors 插件开启跨域设置
    server.use(cors());
/**
 * bodyParse 请求的参数解析到req.body中
 * 
 */
    server.use(bodyParser.json());//解析json 格式的参数
    server.use(bodyParser.urlencoded({extended:false}))// 解析表单格式的参数
/**
 * 采用express.static 配置服务静态公共资源路径
 * path 绝对路径，磁盘路径
 * __dirname 项目根路径
 * 
 * 访问资源直接127.0.0.1：888/xxx.png
*/

    server.use(express.static(path.join(__dirname,"..","..",'public')))
}
