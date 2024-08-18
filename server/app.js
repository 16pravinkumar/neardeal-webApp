const express = require('express'); 
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const conn = require('./conn/conn.js');
const path = require('path');

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors({
   credentials: true,
    origin: ['http://localhost:5173']
}));

dotenv.config();

const port = 3000 || process.env.PORT;

conn();

app.use('/api/v1', require('./routes/userRoutes'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});