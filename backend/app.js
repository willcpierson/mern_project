const express = require("express");
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// ADD THESE TWO LINES
const cors = require('cors');
const { isProduction } = require('./config/keys');

const usersRouter = require('./routes/api/users');
const tweetsRouter = require('./routes/api/tweets');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ADD THIS SECURITY MIDDLEWARE
// Security Middleware
if (!isProduction) {
  // Enable CORS only in development because React will be on the React
  // development server (http://localhost:3000). (In production, the Express 
  // server will serve the React files statically.)
  app.use(cors());
}

// Attach Express routers
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);

module.exports = app;