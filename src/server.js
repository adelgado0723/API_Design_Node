import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(
  urlencoded({
    extended: true
  })
);
app.use(morgan('dev'));

app.get('/test', (req, res) => {
  console.log(req.body);
  res.send('I am a response!');
});

app.post('/test', (req, res) => {
  console.log(req.body);
  res.send('Ok, thank you!');
});

app.listen(3000, () => {
  console.log('Server running on:\nhttp://localhost:3000');
});

export const start = () => {};
