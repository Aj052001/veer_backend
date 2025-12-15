import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT


app.get("/",(req,res)=>{
    res.send("server is start")
})


// fetch data 

app.get("/users",(req,res)=>{
    res.json({message : "all data get"})
})


app.post("/users",(req,res)=>{
    res.json({message:'data send successfully'})
})


app.put("/users",(req,res)=>{
    res.json({message:"user update successfully"})

})


app.delete("/users",(req,res)=>{
    res.json({message : "user deleted successfully"})
})





app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));