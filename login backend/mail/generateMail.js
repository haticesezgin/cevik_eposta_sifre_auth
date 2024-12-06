const nodemailer = require('nodemailer');
const hash=require('../hash/hash') //parola hashleme işlemi

const sendMail=async(email,id)=>{
    let hashToId=hash(id)
   try { 
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "cevikyontemler@gmail.com",
        pass: "zmhk conk ayve brbb",//uygulama şifresi
      },
    });
    await transporter.sendMail({
        from:"cevikyontemler@gmail.com",
        to:email,
        subject:"Parola Doğrulama",
        html:"<p>lütfen mailinizi doğrulamak için buraya <a href=http://localhost:3000/verify/${hashToId}/${id}>Tıklayınız</a></p>"
         })
   } catch (error) {
    console.log(error)
   }
}
module.exports=sendMail

