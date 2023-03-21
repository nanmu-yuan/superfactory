###  node 项目中采用babel 进行es6 代码编译采用
npm install --save-dev @babel/core @babel/preset-env @babel/node @babel/plugin-transform-runtime

"@babel/core": "^7.21.3", Babel的核心库，包含了Babel的转换逻辑和API。通过Babel API，可以将JavaScript代码转换为其他形式的代码（如ES5、ES6等）。
"@babel/node": "^7.20.7", Babel提供的Node.js模块，用于在Node.js应用程序中实时编译JavaScript代码。通过该模块，可以使用Babel编写和运行实时编译的Node.js应用程序。  
"@babel/plugin-transform-runtime": "^7.21.0", 一个Babel插件，用于在转换过程中注入运行时（runtime）代码。通过该插件，可以避免代码冗余和重复，同时还可以减小代码体积和优化性能。
"@babel/preset-env": "^7.20.2" Babel提供的预设，用于根据目标环境自动选择需要使用的插件和转换规则。通过该预设，可以将ES6/ES7代码转换为ES5代码，并且支持大部分ES6/ES7新特性。
### dotenv  
注：在 Node 项目中，可以通过 dotenv 模块来获取 .env 文件中定义的环境变量。这个模块可以将 .env 文件中的键值对读取到 process.env 中，以便在代码中访问这些变量。
require('dotenv').config();
在项目根目录中创建 .env 文件，并在文件中定义需要使用的环境变量
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
