import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/confirmacao.css';
import '../css/components.css';
import logo from '../images/logo.png';

const ConfirmacaoPresenca = () => {
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
      <header className="header">
        <h1 className="header-title">Confirmação de Presença</h1>
        <p className="header-description">Estamos felizes em contar com a sua presença no nosso grande dia!</p>
      </header>

      <div className="banner-container">
        <div className="banner"></div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="banner"></div>
      </div>

      <div className="banner-container">
        <div className="banner"></div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="banner"></div>
      </div>

      <section className="rsvp-section">
        <h2 className="rsvp-title">Confirmação de Presença</h2>
        <p className="rsvp-description">Por favor, confirme sua presença para nossa cerimônia.</p>

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

      <footer className="footer">
        <p className="footer-text">Com amor, Francisco e Camila</p>
      </footer>
    </div>
  );
};

export default ConfirmacaoPresenca;
