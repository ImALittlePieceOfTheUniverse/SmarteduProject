const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');

const app = express();

//connect to DB
const userName = 'admin';
const password = 'fEVe0SD4lXLmFbpn';
const dataBaseName = 'smartedu-DB';
mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster0.h7szhrx.mongodb.net/${dataBaseName}`
  )
  .then(() => {
    console.log(`You've access to the ${dataBaseName} successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

//TEMPLATE ENGINE

app.set('view engine', 'ejs');

//Global variable
global.userIN = null;

//Middleweares
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
  })
);

//Routes
app.use('*', (req, res, next) => {
  userIn = req.session.userID;
  next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
