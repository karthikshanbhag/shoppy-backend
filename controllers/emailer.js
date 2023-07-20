// import asyncHandler from 'express-async-handler'
// import generateToken from '../utils/generateToken.js'
// import User from '../models/userModel.js'


// const nodemailer = require('nodemailer');
// const emailer=(req, res, next)=>{
//   const { email, password } = req.body
//   const user = User.findOne({ email })
  
// var transporter = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "23fd44593c950e",
//     pass: "691dc1b2645e5f"
//   }
// });
// const emailOptions = (name,recieverEmail)=>{
//   return {
//       from: 'sender@sampleMail.com',
//       to: recieverEmail,
//       subject: 'Welcome to our website',
//       html: `
//      <h1> Hi ${name} ! </h1>
//       <br>
//       <h2> Welcome To our Website. </h2>
//       <br>
//       For any Queries, Please contact : XXXXXXXXXX
//       <br>
//       Thanks and Regards
//       <br>
//       Website Team
//       `
//   }
// }
// const mailer = () => {

//   // let name = "Roy";
//   // let recieverEmail = 'roy@gmail.com'

//  const email = emailOptions(user.name,user.email);

//   transporter.sendMail(email);

// }
// mailer()
// }
// export default emailer

















import nodemailer from 'nodemailer'
// import photo from '../data/photo.png'
const emailer=(user)=>{
  
    // const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "23fd44593c950e",
      pass: "691dc1b2645e5f"
    }
  });
  const emailOptions = (name,recieverEmail)=>{
//     attachment: [{
//       filename: 'logo1.png',
//       path: '/path/logo1.png',
//       cid: 'logo1'
//   },
//   {
//       filename: 'logo2.png',
//       path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justinmind.com%2Fblog%2Fecommerce-website-design-examples%2F&psig=AOvVaw0kN0-EdT7lynLSTsrN_eA-&ust=1673672752640000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjejoHjw_wCFQAAAAAdAAAAABAR',
//       cid: 'logo2'
//  }]
    return {
        from: 'shoppy@sampleMail.com',
        to: recieverEmail,
        subject: 'Welcome to Shoppy',
        html: `
       <h1> Hi ${name} ! </h1>
        <br>
        <h2> Welcome To our Shoppy. </h2>
        <br>
        <h2> Look at our latest products on our website. </h2>
        For any Queries, Please contact : support@shoppy.com
        <br>
        Thanks and Regards
        <br>
        Website Team
        `
    }
}
const mailer = () => {

    // let name = "Roy";
    // let recieverEmail = 'roy@gmail.com'

   const email = emailOptions(user.name,user.email);

    transporter.sendMail(email);

}
mailer()
}
export default emailer


// const emailer=()=>{
// const nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "23fd44593c950e",
//       pass: "691dc1b2645e5f"
//     }
//   });
//   const emailOptions = (name,recieverEmail)=>{
//     return email = {
//         from: 'sender@sampleMail.com',
//         to: recieverEmail,
//         subject: 'Welcome to our website',
//         html: `
//        <h1> Hi ${name} ! </h1>
//         <br>
//         <h2> Welcome To our Website. </h2>
//         <br>
//         For any Queries, Please contact : XXXXXXXXXX
//         <br>
//         Thanks and Regards
//         <br>
//         Website Team
//         `
//     }
// }
// const mailer = () => {

//     let name = "Roy";
//     let recieverEmail = 'roy@gmail.com'

//     email = emailOptions(name,recieverEmail);

//     transporter.sendMail(email);

// }
// mailer()
// }
// export default emailer