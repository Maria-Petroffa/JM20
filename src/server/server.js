const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();

  app.options('*', (req, res) => {
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PATCH, PUT, POST, DELETE, OPTIONS',
    );
    res.send();
  });
});

if (process.env.NODE_ENV === 'development') {
  // CORS settings
}
const users = [];


app.post('/sign-up', (req, res) => {
  const { body } = req;

  const filtredBody = users.find((el) => el.email === body.email);

  if (filtredBody !== undefined) {
    res.send('error');
  } else {
    users.push(req.body);
    res.send('success');
  }
});

app.listen(5000, () => {
  console.log('start');
});
