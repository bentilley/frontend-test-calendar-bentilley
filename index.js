const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/views'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(5656, () => {
  console.log('http://localhost:5656');
});

const apiURL = 'https://www.fromtheboxoffice.com/api';

app.get('/api/calendar/:eventID', (req, res) => {
  request(
    `${apiURL}/calendar/${req.params.eventID}`,
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send(response.body);
      } else {
        res.status(response.statusCode);
        if (response.statusCode === 404) {
          res.send('Event not found');
        } else if (response.statusCode < 500) {
          res.send('Invalid request');
        } else {
          res.send('Server error');
        }
      }
    }
  );
});

app.get('/api/months/:eventID', (req, res) => {
  request(`${apiURL}/months/${req.params.eventID}`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(response.body);
    } else {
      res.status(response.statusCode);
      if (response.statusCode === 404) {
        res.send('Event not found');
      } else if (response.statusCode < 500) {
        res.send('Invalid request');
      } else {
        res.send('Server error');
      }
    }
  });
});

app.get('/api/chart/:eventID', (req, res) => {
  request(`${apiURL}/chart/${req.params.eventID}`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(response.body);
    } else {
      res.status(response.statusCode);
      if (response.statusCode === 404) {
        res.send('Event not found');
      } else if (response.statusCode < 500) {
        res.send('Invalid request');
      } else {
        res.send('Server error');
      }
    }
  });
});

app.get('/api/availability/:eventID/:performanceID', (req, res) => {
  const url = `${apiURL}/availability/${req.params.eventID}/${
    req.params.performanceID
  }/1/?is_seat_selection=false&nocache=1`;
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(response.body);
    } else {
      res.status(response.statusCode);
      if (response.statusCode === 404) {
        res.send('Event or performance not found');
      } else if (response.statusCode < 500) {
        res.send('Invalid request');
      } else {
        res.send('Server error');
      }
    }
  });
});
