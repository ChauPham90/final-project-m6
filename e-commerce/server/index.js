const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config();
// import mongoose
const mongoose = require('mongoose');
// import router
const userRouter = require('./routes/user');

//db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`);
});

// route middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', userRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`app listen to ${PORT} `));
