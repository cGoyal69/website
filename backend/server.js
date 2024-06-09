const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendMail = require('./mailer'); // Import the sendMail function

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for handling contact form submissions
app.post('/contact', async (req, res) => {
  try {
    // Send email
    await sendMail(req.body);
    res.json({ code: 200, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ code: 500, message: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 9696;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
