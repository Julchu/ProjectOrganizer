"use strict";

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

// route imports
let dashboard = require('./routes/dashboard');
let about = require('./routes/about');
let login = require('./routes/login');
//let project = require('./routes/project');
let sql = require('./routes/sql');

let User = require('./objects/User.js').userObj;
let boards = require('./routes/boards');
let profile = require('./routes/profile');

let session = require('express-session');

let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
require('./config/passport')(passport);

let api = require('./routes/api');
let testing = require('./routes/testing');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'assets', 'images', 'login.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'shhsecret' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', dashboard);
app.use('/', about);
app.use('/', login);
//app.use('/', project);
app.use('/', sql.router);
app.use('/', boards);
app.use('/', profile);
app.use('/', api);
app.use('/', testing);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;