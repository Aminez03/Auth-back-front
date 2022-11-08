const express=require("express");
const app=express();
const connectDb=require("./config/connectDb")
connectDb()
const user=require("./routes/user")
app.use(express.json())
app.use("/user",user)


const PORT=process.env.PORT||5000;
app.listen(PORT,error=>error?console.log(error):console.log(`server is runig successfuly on ${PORT}`))
