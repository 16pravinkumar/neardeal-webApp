const express = require('express'); 
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const conn = require('./conn/conn.js');

app.use(express.json());
app.use(cors());

dotenv.config({path: './config.env'});
const port = 3000 || process.env.PORT;

conn();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});