const express = require('express')
const app = express();

require('dotenv').config();
// import mongoose
const mongoose = require('mongoose');
// import router
const userRouter = require('./routes/user')

//db connection
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true
    }
)
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// route middleware
app.use('/api', userRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`app listen to ${PORT} `))