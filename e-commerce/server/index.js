const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParse = require('body-parser');
const cookieParse = require('cookie-parser');

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
app.use('/', userRouter);
app.use(morgan('dev'));
app.use(bodyParse.json());
app.use(cookieParse());


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`app listen to ${PORT} `));
