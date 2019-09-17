// import dependencies
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Routes
const userRoute = require('./routes/userRoutes');

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log('Database connection successful...');
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// default route
app.get('/', (req, res) => {
  res.send('APP WORKS');
});

// Routes Middleware
app.use('/api/users', userRoute);

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
