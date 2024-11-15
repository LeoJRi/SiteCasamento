// src/pages/Produtos.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/presentes.css';

// Exemplo de lista de produtos
const produtos = [
    { id: 1, nome: 'Produto 1', preco: 100.00 },
    { id: 2, nome: 'Produto 2', preco: 150.00 },
    { id: 3, nome: 'Produto 3', preco: 200.00 }
];

const Produtos = () => {
    // Função para iniciar o pagamento via PIX
    const handleComprarViaPIX = (produto) => {
        const redirectUrl = generatePagSeguroPaymentUrl(produto);
        window.location.href = redirectUrl; // Redireciona o usuário para o PagSeguro
    };

    return (
        <div className="produtos">
            <h1>Produtos Disponíveis</h1>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        <h2>{produto.nome}</h2>
                        <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                        <button onClick={() => handleComprarViaPIX(produto)}>Comprar via PIX</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Função para gerar a URL de pagamento no PagSeguro
const generatePagSeguroPaymentUrl = (produto) => {
    const pagSeguroUrl = "https://pagseguro.uol.com.br/checkout/v2/payment.html";
    const email = "seu-email@dominio.com"; // Seu e-mail de vendedor do PagSeguro
    const token = "SEU_TOKEN_PAGSEGURO"; // Token da conta no PagSeguro
    const currency = "BRL";
    const itemId1 = produto.id;
    const itemDescription1 = produto.nome;
    const itemAmount1 = produto.preco.toFixed(2); // Preço formatado
    const itemQuantity1 = 1;

    // Monta a URL de pagamento com os parâmetros do produto
    const paymentUrl = `${pagSeguroUrl}?email=${email}&token=${token}&currency=${currency}&itemId1=${itemId1}&itemDescription1=${itemDescription1}&itemAmount1=${itemAmount1}&itemQuantity1=${itemQuantity1}&paymentMethod=PIX`;
    
    return paymentUrl;
};

export default Produtos;
