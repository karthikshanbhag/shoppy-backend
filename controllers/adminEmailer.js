import nodemailer from 'nodemailer'
// import photo from '../data/photo.png'
const adminEmailer=()=>{
  
    // const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "23fd44593c950e",
      pass: "691dc1b2645e5f"
    }
  });
  const emailOptions = ()=>{
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
        to: 'admin@shoppy.com',
        subject: 'Order Update',
        html: `
       <h1> Hi Admin ! </h1>
        <br>
        <h2> You have a new order </h2>
        <h2> Please check the order dashboard </h2>
        <br> `
    }
}
const mailer = () => {

    // let name = "Roy";
    // let recieverEmail = 'roy@gmail.com'

   const email = emailOptions();

    transporter.sendMail(email);
    console.log("email successfull for admin")

}
mailer()
}
export default adminEmailer