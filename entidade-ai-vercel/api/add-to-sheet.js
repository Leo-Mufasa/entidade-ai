
const fetch = require('node-fetch');

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz30Tj7C_NIBvrP3FrRM1mgIxYGFgHu5rOAVGKQwwM43OJb2gr0P1qZ-wNra9FfaxXm/exec';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { item, qtde, obs } = req.body;

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item, qtde, obs })
    });

    const result = await response.json();
    return res.status(200).json({ status: 'ok', result });
  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    return res.status(500).json({ error: 'Erro no envio' });
  }
};
