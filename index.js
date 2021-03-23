const express = require('express');
const app = express();
const port = 9001;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/src'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

app.get('/:id', (req, res) => {
  console.log('this is being called')
  res.header('Access-Control-Allow-Origin', '*');

  res.sendFile(__dirname + '/client/src/index.html')
});

app.get('/', (req, res) => {
  res.redirect('/1');
});

// app.get('/:id/photos', (req, res) => {
//   res.redirect('http://localhost:3000/:id/photos');
// })