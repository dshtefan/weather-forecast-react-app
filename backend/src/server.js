const app = require('./express');
const fetch = require('node-fetch');
const { saveOne, deleteOne, findAll, findOne } = require('./dbOperations');

const appid = '9c2f796d45e91e5c01a2ae26f1613625';

app.get('/favorites', async function (req, res) {
  try {
    res.json(await findAll());
  } catch (err) {
    res.status(500).end();
  }
});

app.post('/favorites', async function (req, res) {
  try {
    try {
      const data = await saveOne(req.body.city);
      res.json(data).end();
    } catch (e) {
      res.json(await findOne(req.body.city)).end()
    }
  } catch (err) {
    res.status(500).end();
  }
});

app.delete('/favorites', async function (req, res) {
  try {
    await deleteOne(req.query.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).end();
  }
});

app.get('/weather', function (req, res) {
  let url = new URL('https://api.codetabs.com/v1/proxy');
  url.search = new URLSearchParams({
    quest: `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${appid}`
  }).toString();
  fetch(url)
    .then(data => data.json())
    .then((data) => res.json(data))
    .catch(() => res.status(500).end());
});

app.get('/weather/coordinates', function (req, res) {
  let url = new URL('https://api.codetabs.com/v1/proxy');
  url.search = new URLSearchParams({
    quest: `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=${appid}`
  }).toString();
  fetch(url)
    .then(data => data.json())
    .then((data) => res.json(data))
    .catch(() => res.status(500).end());
});
