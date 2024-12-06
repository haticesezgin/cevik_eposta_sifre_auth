const express = require('express');
const User=require('./models').user;
const hash=require('./hash/hash');

const app = express();

app.use(express.json());
app.listen(3000, () => {
    app.use("/users", require("./routes/userRoute"));
    app.use("/verify/:hash/:id",(req,res)=>{
        if(req.params.hash==hash(req.params.id)) return res.status(404).send("Sayfa bulunamadı")
         user={
        id:req.params.id,
        status:true
    }
    User.update(user,{where:{id:user.id}})
    res.send("Hesap Doğrulandı")
    console.log("doğrulandı")

           
    })
    console.log("port dinleniyor...");
})

