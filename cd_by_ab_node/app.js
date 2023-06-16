const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const getData = require('./utils/scrapper');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/data', async (req, res, next) => {
  try {
    const data = await getData();
    if(data) {
      console.log(data);
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
  }
  
});

// Handling Errors
app.use(async (req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message
    }
  });
});



const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server listning at port ${PORT}...`);
});
