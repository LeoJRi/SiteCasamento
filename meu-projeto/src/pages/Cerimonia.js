import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import '../css/cerimonia.css';
import '../css/components.css'
import logo from '../images/logo.svg';
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
            <section className="details-section">
                <div>
                    <h1 className="header-title">Cerimônia do Casamento</h1>
                    <br />
                    <p className="text-description">Estamos muito felizes em compartilhar esse momento tão especial com você! Nossa cerimônia será um reflexo de nossa jornada juntos e dos votos que escolhemos fazer, cercados das pessoas que amamos. Venha celebrar conosco esse dia cheio de amor e alegria, onde daremos o primeiro passo rumo ao nosso futuro juntos.</p>
                </div>
            </section>

            <div className="banner-container">
                <div className="banner"></div>
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="banner"></div>
            </div>

            <section className="details-section">
                <h2 className="header-title">Detalhes da Cerimônia</h2><br />
                <p className="text-description">
                    <strong>Data:</strong> 01 de Fevereiro de 2025 <br />
                    <br />
                    <strong>Horários:</strong> <br></br>
                    Recepção: 17h30 <br></br>
                    Cerimônia: 18h00
                </p>
            </section>

            <div className="vinicula-image">
                <img src={vinicola} alt="Logo" className="vinicula-image" />
            </div>

            <section className="location-section">
                <h2 className="header-title">Local da Cerimônia</h2><br />
                <p className="text-description">
                    <strong>Local:</strong> Vinícola Famiglia De Bona <br />
                    <strong>Endereço:</strong> Linha A, Secção Ligeiro nº 1505, Comunidade Bairro Peccin, <br />
                    <strong>Cidade:</strong> Erechim, RS
                </p>

                <div className="video-section">
                    <h2>Como chegar ao local</h2>
                    <p className="text-description">Assista ao vídeo no Instagram para saber como chegar ao local do evento:</p>
                    <a
                        href="https://www.instagram.com/reel/C-khl_NA0xN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-link">
                        Clique aqui para assistir no Instagram
                    </a>
                </div>

                <br />
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
                <h2 className="header-title">Já sabe se vai ir?</h2>
                <p className="text-description">Confirmação de Presença, ficaremos muito felizes de recebê-los e estarem conosco nesse momento tão especial.</p>
                <p className="text-description">Por favor, confirme sua presença até 5º de Janeiro.</p>
                <button className="to-confirm">
                    <Link to="/ConfirmacaoPresencas" className="link-reset">
                        Confirmação de Presenças
                    </Link>
                </button>
            </section>

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

export default Cerimonia;
