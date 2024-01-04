const express=require('express');
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const cartRoute=require("./routes/cart")
const orderRoute=require("./routes/order")
const stripeRoute=require("./routes/stripe")
app.use(express.json())
const cors=require("cors");

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successfull"))
.catch(err=>
    {
        console.log(err)
    });
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);






app.listen(process.env.PORT,(err)=>{
    if (err) throw err;
    console.log(`Server is running on port ${process.env.PORT}`);
});