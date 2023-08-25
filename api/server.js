const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = process.env.PORT || 4000
const AuthRoute = require('./routes/Auth');
const TodoRoute = require('./routes/Todo');
const app = express();
dotenv.config();


app.use(express.json());
app.use(cors());

const MongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB is connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Sunucuyu başlatmayı durdur
  }
}


// Routes
app.use('/api/auth', AuthRoute);
app.use('/api/todo', TodoRoute);


app.listen (port, () => {
    MongoDb();
    console.log('Server is running on port: ${port}');
} );
