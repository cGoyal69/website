const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email service provider, e.g., 'Gmail', 'Yahoo', etc.
  auth: {
    user: 'cgoy36@gmail.com', // Replace with your email address
    pass: 'rped ldzn yiab dikr', // Replace with your email password
  },
});

// Function to send email
const sendMail = async (formData) => {
  try {
    // Email message configuration
    const mailOptions = {
      from: 'cgoy36@gmail.com',
      to: 'cgoy96@gmail.com', // Replace with the recipient's email address
      subject: 'New Message from Contact Form',
      html: `
        <h1>New Message from Contact Form</h1>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

module.exports = sendMail;
