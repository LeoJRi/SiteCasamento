import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import '../css/cerimonia.css';
import logo from '../images/logo.png';
import vinicola from '../images/vinicola.jpg';

const Cerimonia = () => {
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
        <div className="wedding-page">
            <header className="header">
                <h1>Cerimônia de Casamento</h1>
                <p>Estamos felizes em compartilhar esse momento especial com você!</p>
            </header>

            <div className="banner-container">
                <div className="banner"></div>
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="banner"></div>
            </div>

            <section className="details-section">
                <h2>Detalhes da Cerimônia</h2>
                <p>
                    <strong>Data:</strong> 01 de Fevereiro de 2025 <br />
                    <strong>Horário:</strong> 18:00h
                </p>
            </section>

            <div className="vinicula-image">
                <img src={vinicola} alt="Logo" className="vinicula-image" />
            </div>

            <section className="location-section">
                <h2>Local</h2>
                <p>
                    <strong>Endereço:</strong> Vinícola Famiglia De Bona <br />
                    <strong>Cidade:</strong> Erechim, RS
                </p>
                <iframe
                    title="Local da cerimônia"
                    src="https://www.google.com.br/maps/embed?pb=!1m18!1m12!1m3!1d3541.662563618667!2d-52.27412868541934!3d-27.713095682781826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e311308a600a15%3A0x5ba937353be74222!2sVin%C3%ADcola%20Famiglia%20De%20Bona!5e0!3m2!1spt-BR!2sbr!4v1698526475331!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            <section className="rsvp-section">
                <h2>Ja sabe se vai ir?</h2>
                <p>Confirmação de Presença, ficaremos muito felizes de recebe-los e estarem conosco nesse momento tão especial </p>
                <p>Por favor, confirme sua presença até 10º de Janeiro.</p>
                <button >
                    <Link to="/ConfirmacaoPresencas">Confirmacao de Presencas</Link>
                </button>
            </section>

            <div className="wedding-page">
                {showScroll && (
                    <button className="scroll-to-top" onClick={scrollToTop}>
                        ↑
                    </button>
                )}
            </div>

            <footer className="footer">
                <p>Com amor, Francisco e Camila</p>
            </footer>
        </div>
    );
};

export default Cerimonia;
