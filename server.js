const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Set up Nodemailer with your email service provider
const transporter = nodemailer.createTransport({
  service: 'exceleasily.com', // Replace with your email service provider
  auth: {
    user: 'info@exceleasily.com', // Replace with your email address
    pass: 'yourPassword' // Replace with your email password
  }
});

// Define a route to handle email submissions
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'info@exceleasily.com', // Replace with your email address
    to: 'info@exceleasily.com', // Replace with the recipient's email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
