import express from 'express'

const app = express()
const PORT = 5000


app.use(express.json())



const data = [
    {
        fname :"veer",
        lname:"gupta"
    }
    ,
       {
        fname :"veer",
        lname:"gupta"
    },
       {
        fname :"veer",
        lname:"gupta"
    },
       {
        fname :"veer",
        lname:"gupta"
    }
]


let isLogin = false



app.get("/",(req,res)=>{
    res.json({message:"server is start"})
})

function checkAdmin(req,res,next){
    if(isLogin)
    {
        console.log("user is login so we can pass data")
        next()
        
    }
    else{
        res.status(500).send("user is not login")
    }
}


app.get("/users",checkAdmin,(req,res)=>{
    res.json({users:data})
})



app.listen(PORT,()=>{
    console.log("server is start on 5000")
})



// listen,get, post, put, delete, use -> use middleware