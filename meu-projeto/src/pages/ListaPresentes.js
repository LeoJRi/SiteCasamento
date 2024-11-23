import React, { useEffect, useState } from 'react';
import '../css/presentes.css';
import '../css/components.css';
import tampaoOuvido from '../images/tampaoOuvido.jpeg';
import buque from '../images/buque.jpeg';
import amigosSempre from '../images/amigosSempre.jpeg';
import alexa from '../images/alexa.jpeg';
import aposentadoria from '../images/aposentadoria.jpeg';
import bronco from '../images/bronco.jpeg';
import chines from '../images/chines.jpeg';
import civic from '../images/civic.jpeg';
import compras from '../images/compras.jpeg';
import luaMel from '../images/luaMel.jpeg';
import netflix from '../images/netflix.jpeg';
import cartinha from '../images/cartinha.jpeg';
import roloMacarrao from '../images/roloMacarrao.jpeg';
import capacete from '../images/capacete.jpeg';
import jantar from '../images/jantar.jpeg';
import fantasia from '../images/fantasia.jpeg';
import fralda from '../images/fralda.jpeg';
import maracujina from '../images/maracujina.jpeg';
import teclado from '../images/teclado.jpeg';
import barbearia from '../images/barbeiro.jpeg';
import tinta from '../images/tinta.jpeg';
import viagem from '../images/viagem.jpeg';
import quartoVisita from '../images/quartoVisita.jpeg';
import parente from '../images/parente.jpeg'

const produtos = [
    { id: 1, nome: 'Tampão de ouvido para a noiva enquanto o noivo ronca', preco: 1.00, imagem: tampaoOuvido, link: "https://www.google.com"},
    { id: 2, nome: 'Taxa para a noiva não jogar o buquê para sua amada', preco: 350.00, imagem: buque },
    { id: 3, nome: 'Cota de "amigos para sempre"', preco: 800.00, imagem: amigosSempre },
    { id: 4, nome: 'Alexa (para a noiva não mandar só no noivo)', preco: 499.90, imagem: alexa },
    { id: 5, nome: 'Patrocine a aposentadoria do casal', preco: 1000.00, imagem: aposentadoria },
    { id: 6, nome: 'Ajude a noiva comprar o carro dos sonhos', preco: 900.00, imagem: bronco },
    { id: 7, nome: 'Ajude o noivo comprar o carro dos sonhos', preco: 900.00, imagem: civic },
    { id: 8, nome: 'Pacote da Netflix anual', preco: 684.00, imagem: netflix },
    { id: 9, nome: 'Hospedagem da lua de mel', preco: 1200.00, imagem: luaMel },
    { id: 10, nome: 'Patrocine as comprinhas da noiva', preco: 810.00, imagem: compras },
    { id: 11, nome: 'Patrocine o vício do noivo em cartinha para comprar um baralho novo', preco: 650.00, imagem: cartinha },
    { id: 12, nome: 'Patrocine a noiva no chinês (o noivo não aguenta mais)', preco: 599.00, imagem: chines },
    { id: 13, nome: 'Rolo de macarrão caso o noivo não se comporte', preco: 320.00, imagem: roloMacarrao },
    { id: 14, nome: 'Capacete para proteger o noivo da noiva com o rolo de macarrão', preco: 420.00, imagem: capacete },
    { id: 15, nome: 'Garanta o jantar do noivo por um mês após o casamento', preco: 600.00, imagem: jantar },
    { id: 16, nome: 'Roupa sexy para a primeira noite de casados', preco: 430.00, imagem: fantasia },
    { id: 17, nome: 'Seja um tio/tia legal para nossa primeira filha e compre o primeiro pacote de fralda', preco: 470.00, imagem: fralda },
    { id: 18, nome: 'Seja o parente mais amigo do casal', preco: 2000.00, imagem: parente },
    { id: 19, nome: 'Maracujina para a noiva não quebrar o pc gamer do noivo', preco: 390.00, imagem: maracujina },
    { id: 20, nome: 'Caso a maracujina não tenha dado certo, ajude o noivo comprar um teclado novo pois o outro sofreu um leve acidente', preco: 579.99, imagem: teclado },
    { id: 21, nome: 'Um ano de barbearia para o noivo', preco: 1800.00, imagem: barbearia },
    { id: 22, nome: 'Um ano de tinta ruiva para a noiva', preco: 1200.00, imagem: tinta },
    { id: 23, nome: 'Patrocine nossa viagem para a Itália, caso sobre troco nós devolvemos em euro', preco: 3000.00, imagem: viagem },
    { id: 24, nome: 'Prioridade no quarto de visita do apartamento dos noivos', preco: 950.00, imagem: quartoVisita }
];

const Produtos = () => {
    const handleComprarViaPIX = (produto) => {
        const redirectUrl = produto.link;
        console.log(redirectUrl);
        window.open(redirectUrl, '_blank');
    };

    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="produtos">
            <h1>Produtos Disponíveis</h1>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
                        <h2>{produto.nome}</h2>
                        <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                        <button onClick={() => handleComprarViaPIX(produto)}>Comprar via PIX</button>
                    </li>
                ))}
            </ul>
            <div className="banner-container">
                <div className="banner"></div>
                <div className="wedding-page">
                    {showScroll && (
                        <button className="scroll-to-top" onClick={scrollToTop}>
                            ↑ <br />
                        </button>
                    )}
                </div>
                <div className="banner"></div>
            </div>
        </div>
    );
};

const generatePagSeguroPaymentUrl = (produto) => {
    const pagSeguroUrl = "https://pagseguro.uol.com.br/checkout/v2/payment.html";
    const email = "seu-email@dominio.com";
    const token = "SEU_TOKEN_PAGSEGURO";
    const currency = "BRL";
    const itemId1 = produto.id;
    const itemDescription1 = produto.nome;
    const itemAmount1 = produto.preco.toFixed(2);
    const itemQuantity1 = 1;

    const paymentUrl = `${pagSeguroUrl}?email=${email}&token=${token}&currency=${currency}&itemId1=${itemId1}&itemDescription1=${itemDescription1}&itemAmount1=${itemAmount1}&itemQuantity1=${itemQuantity1}&paymentMethod=PIX`;

    return paymentUrl;
};
export default Produtos;