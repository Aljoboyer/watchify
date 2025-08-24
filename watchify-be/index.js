const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json()); // For JSON bodies
app.use(express.urlencoded({ extended: true }));

// database connetion
const connectDB = require("./src/DBConnection/DBConnection");

(async () => {
  try {
    await connectDB();
    
  } catch (err) {
    console.error("DB connection failed ❌", err);
  }
})();

const mainRouter = require('./src/routes/index');

// Use the main router
app.use('/api', mainRouter); 

app.get('/', (req, res) => {
  res.send('Watchify Server is connected!')
})

// app.listen(port, () => {
//   console.log(`Watchify Server running on port ${port}`);
// });

module.exports = app;