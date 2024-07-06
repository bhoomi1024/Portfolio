const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // For sending emails

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Endpoint to handle POST requests from the client
app.post('/sendEmail', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter with nodemailer (replace with your SMTP settings)
  let transporter = nodemailer.createTransport({
    host: 'smtp.yourmailserver.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  // Email content
  let mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
