import express, { Application } from 'express'
import nodemailer from 'nodemailer';
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import httpStatus from 'http-status'
import { sendSuccessResponse } from './shared/customResponse'


// Import routes
import routes from './app/routes/index'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Testing route
app.get('/', async (req, res, next) => {
  const responseData = {
    message: 'Welcome to Express API template',
    data: null,
  }
  sendSuccessResponse(res, responseData)
})

app.post('/send-email', (req, res) => {
  const { sender, recipient, subject, message } = req.body;

  const mailOptions = {
    from: sender,
    to: recipient,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email not sent');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
});


// All routes here
// app.use('/api/v1', routes)

// Global error handler
app.use(globalErrorHandler)

// Forbidden routes
app.all('*', (req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: 'false',
    message: `No API endpoint found for ${req.method} ${req.originalUrl}`,
    errorMessages: [
      {
        message: `No API endpoint found for ${req.method} ${req.originalUrl}`,
        path: req.originalUrl,
      },
    ],
    stack: '',
  })
})

export default app
