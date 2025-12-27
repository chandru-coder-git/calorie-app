const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors(cors({
  origin: "https://https://calorie-web-app.vercel.app/"
})));
app.use(express.json());

app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/foods', require('./routes/foodRoutes'));
app.use('/api/consume', require('./routes/consumeRoutes'));

app.listen(PORT, () => console.log('Server running on port 5000'));
