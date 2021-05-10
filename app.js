// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/books', books);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/client/build'));

  app.get('*', (req, res) =>
    res.sendFile('client/build/index.html'));
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// if(process.env.NODE_ENV == "production")
// {
//     app.use(express.static("client/build"));
//     // const path = require("path");
//     // app.get("*", (req,res) => {
//     //   res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     // })
// }

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8082;
}

app.listen(port, () => console.log("Server started successfully."));