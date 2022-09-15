import express from 'express';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/" ,(req,res)=>{
    res.send("hi there")

})
app.post("/",(req, res)=>{
res.send(req.body)

})


app.listen(4000,()=> console.log("Server is running perfectly"))