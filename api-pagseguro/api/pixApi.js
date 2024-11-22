const axios = require('axios');
require('dotenv').config();

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { valor, descricao } = req.body;

  try {
    const response = await axios.post(
      `${process.env.PAGSEGURO_BASE_URL}/instant-payments/qrcodes`,
      {
        amount: {
          value: valor, // Valor em centavos (ex: 1000 para R$ 10,00)
        },
        description: descricao,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAGSEGURO_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Retorna os dados do pagamento PIX (código QR, link)
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao criar pagamento via PIX:', error.response.data);
    res.status(500).json({ error: 'Erro ao criar pagamento via PIX' });
  }
};
