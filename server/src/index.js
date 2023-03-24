import express from"express"
const server = express();
import router from "./controllers/interface";
import setupLoadModules from './setup/load-modules';
import setupStartServer from "./setup/start-server";
import authentication from "./models/authentication";


// 加载处理模块
setupLoadModules(server);
// token
server.use(authentication)
// 引入路由
server.use('/api',router)
// 启动
setupStartServer(server);