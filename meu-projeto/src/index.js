import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação da versão do ReactDOM para React 18+
import App from './App';
import './index.css'; // Opcional, se você tiver um CSS global para o projeto

// Seleciona o elemento com ID 'root' em 'public/index.html'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente <App /> dentro do elemento 'root'
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
