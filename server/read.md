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
### mysql.createPool 和 mysql.createConnection  的区别
mysql.createPool 和 mysql.createConnection 都是 Node.js 中用于创建 MySQL 数据库连接的函数。它们之间的区别在于：

mysql.createConnection 创建一个单独的数据库连接，使用完毕后需要手动关闭连接，而 mysql.createPool 创建的是一个连接池，可以通过调用 pool.getConnection() 来获取连接，在使用完毕后会自动归还到连接池中。

连接池可以提高应用程序的性能，因为可以重复使用已经建立的连接而不必每次都创建一个新连接。此外，连接池还可以在并发请求时限制最大连接数，以防止过多的连接请求导致数据库连接过载。
连接池还提供了一些额外的功能，例如可以设置连接超时时间、空闲连接的最大数量和最小数量等。
综上所述，如果应用程序需要频繁地连接数据库并且需要高性能，那么使用 mysql.createPool 是更好的选择。如果只需要连接数据库做一些简单的操作，那么可以使用 mysql.createConnection。

### `select * from user u where u.phone = ${params.phone}`  是什么意思

这是一条 SQL 查询语句，意思是从表名为 user 的数据表中查询所有符合条件 u.phone = ${params.phone} 的记录。

${params.phone} 可能是一个变量或参数，它的值将在查询执行时动态地插入到 SQL 查询语句中，以实现动态查询的效果。这种方式通常被称为参数化查询，可以防止 SQL 注入等安全问题。

在这个查询中，u 是一个别名，用于表示表名为 user 的数据表。使用别名可以简化 SQL 查询语句的编写，并且可以使 SQL 查询语句更易于阅读和理解。 u.phone 表示 user 表中的 phone 字段。查询中的 * 通常表示查询所有字段，也可以将其替换为具体字段名，以返回需要的数据。