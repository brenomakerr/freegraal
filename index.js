const express = require('express');
const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', async (req, res) => {
  res.sendFile('index.html', { root: __dirname })
});

app.get('/casal', async (req, res) => {
  res.sendFile('casal.html', { root: __dirname })
});

app.get('/feminino', async (req, res) => {
  res.sendFile('feminino.html', { root: __dirname })
});

app.get('/masculino', async (req, res) => {
  res.sendFile('masculino.html', { root: __dirname })
});

app.get('/masculinobody', async (req, res) => {
  res.sendFile('masculinobody.html', { root: __dirname })
});

app.get('/masculinohead', async (req, res) => {
  res.sendFile('masculinohead.html', { root: __dirname })
});

app.get('/animal', async (req, res) => {
  res.sendFile('animal.html', { root: __dirname })
});


app.listen(PORT, () => {
  console.log(`sayoz up está rodando no host: http://localhost:${PORT}`);
});

module.exports = app