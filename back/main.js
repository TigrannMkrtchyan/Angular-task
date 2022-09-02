const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var cardRouter = require('./routes/cards');
var usersRouter = require('./routes/users');

mongoose.connect('mongodb+srv://Tigran:solicy123@cluster0.ljejrex.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
);
app.use('/users', usersRouter);
app.use('/cards', cardRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
