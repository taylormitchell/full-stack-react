const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const movies = JSON.parse(fs.readFileSync('db.json', 'utf8'));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/api/movies', (req, res) => {
    console.log("you got served bud!")
    res.json(movies);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
