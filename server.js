const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const app = express();
const http = require("http");

const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

const config = require('./config/database');
const port = 5000;
io.on("connection", socket => {
  socket.emit("your id", socket.id);
  socket.on("send message", body => {
      io.emit("message", body)
  })
})


// connnect Mongodb
mongoose.connect(config.database, { useNewUrlParser: true });
let db = mongoose.connection;
// Check connections
db.once('open', function () {
  console.log("Connected to MongoDB");
});
// Check for error
db.on('error', function (err) {
  console.log(err);
});

// Cors middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));



// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));




// Route file 

let user = require('./routes/user');
let ad = require('./routes/ad');
app.use('/user', user);
app.use('/item', ad);

server.listen(8000, () => console.log("server is running on port 8000"));
app.listen(port, () => console.log(`The Server is running on port ${port}`));