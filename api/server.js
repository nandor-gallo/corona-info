const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
app.use(express.static('public'));


app.get('/data', (req,res) => {
  fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    res.send(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
