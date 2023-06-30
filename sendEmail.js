require('dotenv').config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({  //used outlook to get smtp server info!
  host: 'smtp.gmail.com', 
  port: Number(process.env.smServer), 
  secure: true, 
  //to make nodemailer trust the self signed certificate issued by smtp server added tls:
  tls: {   
    rejectUnauthorized: false
  },
  auth: {
    user: 'faiza232574@gmail.com', 
    pass: "tpweomydmnlzrswa"  //app generated password instead of normal email password because I have enabled 2 factor authentication
  }
});

function sendEmail() {
    return new Promise((resolve, reject) => {
     
      const message = {
        from: 'faiza232574@gmail.com', 
        to: 'faizalam4e@gmail.com', 
        subject: 'Hello call from Faiz', 
        text: 'This is the body of the email ...' 
      };
  
    
      transporter.sendMail(message, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  sendEmail().then(data => {
    console.log('Email sent:', data);
  })
  .catch(error => {
    console.error('Error sending email:', error);
  });
