import jwt from "jsonwebtoken"
export default function(req,res,next){
    let authToken= req.headers.authorization;
    if(authToken  && authToken !=null){
        try{
            const token  = authToken.split(" ");
            req.user =  jwt.verify(token[1],"my token")
        }catch(e){
            console.warn('Invalid token detected')
        }
    }else{
        req.user= {};
    }
    next()
}