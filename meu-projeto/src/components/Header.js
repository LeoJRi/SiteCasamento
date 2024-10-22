import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/DressCode">Dess Code</Link></li>
                    <li><Link to="/ListaPresentes">Lista de Presentes</Link></li>
                    <li><Link to="/ConfirmacaoPresencas">Confirmacao de Presencas</Link></li>
                    <li><Link to="/Cerimonia">Cerimonia</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
