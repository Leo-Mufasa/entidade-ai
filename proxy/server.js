
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SEU_ENDPOINT_ID/exec';

app.post('/api/add-to-sheet', async (req, res) => {
  const { item, qtde, obs } = req.body;

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item, qtde, obs })
    });

    const result = await response.json();
    res.status(200).json({ status: 'ok', result });
  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    res.status(500).json({ error: 'Falha ao registrar na planilha' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
