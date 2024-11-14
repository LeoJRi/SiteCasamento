import React from 'react';
import '../css/components.css';
import logo from '../images/logo.png';

const Home = () => {
    return (
        <div className="wedding-page">
            <div className="rsvp-section">
                <h1 className="header-title">Era uma vez...</h1>
                <p className="text-description">Dizem que encontramos o amor de nossas vidas quando alguém ao nosso lado traz uma sensação de paz ao coração. Mas essa paz é diferente para cada pessoa. Pode ser a paz de encontrar alguém com gostos parecidos, a paz de desejar dividir com essa pessoa todos os dias que virão, alegrias, desafios, histórias. Ou talvez seja a paz de perceber que, mesmo sendo diferentes, essa pessoa fez seu coração dizer “sim” desde o primeiro instante.</p>
                <br/>
                <p className="text-description">Você saberá quando ela chegar, pois seu coração vai acelerar, seus sonhos serão invadidos, e cada encontro trará aquele frio na barriga. Sentirá um toque, mesmo sem um beijo, e verá que os sentimentos mais puros surgem sem que nada precise ser cobrado. Será único, será recíproco, será amor.</p>
                <br/>
                <p className="text-description">E assim aconteceu conosco, foi de um jeito leve e carinhoso que nos envolvemos e deixamos o amor nos guiar.</p>
            </div>
            //imagens
            <div className="banner-container">
                <div className="banner"></div>
                <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="banner"></div>
            </div>

            <div className="rsvp-section">
                <h1 className="header-title">Bem-vindos!</h1>
                <p className="text-description">Queridos familiares e amigos. Este site foi criado para compartilhar com vocês alguns detalhes sobre o nosso grande dia. Estamos muito felizes e certos de que será um momento especial para todos nós.</p>
                <br/>
                <p className="text-description">Navegue pelo menu para conhecer nossa história, nossa família, dicas para o dia do evento (dress code, perguntas frequentes) e detalhes sobre a programação e o local.</p>
                <br/>
                <p className="text-description">Não se esqueça de confirmar sua presença! Nossa lista de presentes também está disponível aqui no site.</p>
            </div>
        </div>
    )
};

export default Home;
