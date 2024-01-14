import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
const url = 'mongodb://localhost:27017/Estate';


const port = 8000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {

  console.log('Connected to MongoDB');

});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
    
  });




  