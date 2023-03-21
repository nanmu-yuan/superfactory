import { NODE_ENV,PORT } from "../config/env"
console.log(NODE_ENV,PORT)
export default function(server){
    server.listen(PORT,(error)=>{
        if(error){

        }else{
            console.log(`server started on http://localhost:${PORT} [${NODE_ENV}]`)
        }
        
    })
}