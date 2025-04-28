import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import routes from './routes/emergencyData.routes.js';
import cors from 'cors';

dotenv.config();

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || origin.includes('localhost') || origin.includes('onrender.com')) {
      callback(null, true);
    } else {
      callback(new Error('not allowed by cors'));
    }
  },
  methods: ['GET', 'POST','PUT', 'DELETE'],
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
connectDB();

// Set up routes
app.use('/api', routes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

const CFG = {
  PORT: process.env.PORT || 5000, 
};

app.listen(CFG.PORT, () => {
  console.log(`Server running on localhost:${CFG.PORT}`);
});
