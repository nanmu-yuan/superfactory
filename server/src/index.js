import express from"express"
const server = express();
import router from './router'
import setupLoadModules from './setup/load-modules';
import setupStartServer from "./setup/start-server";


// 加载处理模块
setupLoadModules(server);
// 引入路由
server.use("/api",router);
// 启动
setupStartServer(server);