import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/confirmacao.css';
import '../css/components.css';
import logo from '../images/logo.svg';

const ConfirmacaoPresenca = () => {
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

  const [nome, setNome] = useState('');
  const [levaAcompanhante, setLevaAcompanhante] = useState(false);
  const [nomeAcompanhante, setNomeAcompanhante] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome) {
      alert("Por favor, insira seu nome.");
      return;
    }

    const templateParams = {
      nome: nome,
      levaAcompanhante: levaAcompanhante ? "Sim" : "Não",
      nomeAcompanhante: levaAcompanhante ? nomeAcompanhante : "Nenhum acompanhante",
    };

    emailjs
      .send('service_42bjl8s', 'template_a3t2307', templateParams, 'GRZvHGzmU-6EZ85z4')
      .then(
        (response) => {
          alert('Sua confirmação foi enviada com sucesso!');
        },
        (error) => {
          alert('Ocorreu um erro ao enviar sua confirmação.');
        }
      );
  };
  return (
    <div className="wedding-page">
      <section className="rsvp-section">
        <h2 className="rsvp-title">Dress Code</h2>
        <p className="text-description">Queridos convidados</p>
        <p className="text-description">Para que todos se sintam confortáveis e em harmonia com o clima especial do nosso casamento, definimos algumas orientações sobre o dress code:</p><br></br>
        <h3 className='titleDressCode'>Para as Mulheres</h3><br></br>
        <p className="text-description">•	Cores a evitar: Pedimos que <strong>não usem vestidos nas cores preto ou branco.</strong> <br></br><br></br>
          •	Sapatos: Recomendamos o uso de saltos bloco ou sapatos mais estáveis, já que a cerimônia será realizada no gramado. Isso garantirá maior conforto e evitará imprevistos. <br></br><br></br>
          •	Estilo do vestido: Escolham vestidos que valorizem o conforto e a elegância. Prefiram modelos com decotes moderados e comprimento apropriado, lembrando que é um casamento e que o dress code exige certa discrição.
        </p><br></br>
        <h3 className='titleDressCode'>Para os Homens</h3><br></br>
        <p className="text-description">•	Cores a evitar:<strong> Evitem looks completamente all black (todo preto).</strong> Ternos pretos estão permitidos, mas a camisa e a gravata devem ser de outra cor, que não seja preta.</p><br></br>
        <p className="text-description">Estamos ansiosos para celebrar esse dia especial com vocês e agradecemos a atenção e o carinho em seguir o dress code!</p>
        <p className="text-description">Com amor, <br></br>
          Os Noivos
        </p>

      </section>

      <div className="banner-container">
        <div className="banner"></div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="banner"></div>
      </div>

      <section className="rsvp-section">
        <h2 className="rsvp-title">Confirmação de Presença</h2>
        <p className="text-description">Por favor, confirme sua presença para nossa cerimônia.</p><br></br>

        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-field">
            <label htmlFor="nome" className="form-label">Seu Nome:</label>
            <input
              type="text"
              id="nome"
              className="form-input"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="levaAcompanhante" className="form-label">Possui cônjuge?</label>
            <input
              type="checkbox"
              id="levaAcompanhante"
              className="form-checkbox"
              checked={levaAcompanhante}
              onChange={(e) => setLevaAcompanhante(e.target.checked)}
            />
          </div>

          {levaAcompanhante && (
            <div className="form-field">
              <label htmlFor="nomeAcompanhante" className="form-label">Nome do Acompanhante:</label>
              <input
                type="text"
                id="nomeAcompanhante"
                className="form-input"
                value={nomeAcompanhante}
                onChange={(e) => setNomeAcompanhante(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="submit-button">Enviar Confirmação</button>
        </form>
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

export default ConfirmacaoPresenca;
