const db = require('../../models/db')

exports.login  = (req,res,next)=>{
    let params  = req.body;
    db.query(`select * from users u where u.username ='${params.username}'`,(err,rows,fields)=>{
        if(err){
            throw err
        }else{
            if(rows.length){
                if(rows.password==params.password){
                    res.json({
                        status:200,
                        mes:'登陆成功!'
                    })
                   }else{
                    res.json({
                        status:200,
                        mes:'账户密码错误'
                    })
                   }
            }else{
                console.log(`insert into users values(null,${params.username},${params.password})`)
                db.query(`insert into users (id,username,password) values (null,'${params.username}','${params.password}')`,(err,rows,fields)=>{
                    if(err){
                      throw err
                    }else{
                        if(rows.affectedRows){
                            res.json({
                                mes:"注册成功"
                            })
                        }else{
                            res.json({
                                mes:'注册失败'
                            })
                        }
                       
                    }
                })

            }
           
        }
    })
}