import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import logo from '../images/logo.png';

const Header = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const targetDate = new Date('2025-02-01T00:18:00');
        
        const countdown = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(countdown);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(countdown);
        
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="countdown">
                <div className="icon-container">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="icon" />
                    </Link>
                </div>
                <div className="countdown-timer">
                    <div className="time-segment">
                        <span className="time-value">{timeLeft.days}</span>
                        <span className="time-label">Dias</span>
                    </div>
                    <div className="time-segment">
                        <span className="time-value">{timeLeft.hours}</span>
                        <span className="time-label">Horas</span>
                    </div>
                    <div className="time-segment">
                        <span className="time-value">{timeLeft.minutes}</span>
                        <span className="time-label">Minutos</span>
                    </div>
                    <div className="time-segment">
                        <span className="time-value">{timeLeft.seconds}</span>
                        <span className="time-label">Segundos</span>
                    </div>
                </div>
            </div>
            <div className="banner-header">
                <div className="banner-content">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/ListaPresentes" onClick={() => setIsMenuOpen(false)}>Lista de Presentes</Link></li>
                            <li><Link to="/ConfirmacaoPresencas" onClick={() => setIsMenuOpen(false)}>Confirmação de Presenças</Link></li>
                            <li><Link to="/Cerimonia" onClick={() => setIsMenuOpen(false)}>Cerimônia</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
