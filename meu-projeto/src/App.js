import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DressCode from './pages/DressCode';
import ListaPresentes from './pages/ListaPresentes';
import ConfirmacaoPresencas from './pages/ConfirmacaoPresencas';
import Cerimonia from './pages/Cerimonia';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dresscode" element={<DressCode />} />
          <Route path="/listapresentes" element={<ListaPresentes />} />
          <Route path="/confirmacaopresencas" element={<ConfirmacaoPresencas />} />
          <Route path="/cerimonia" element={<Cerimonia />} />
        </Routes>
    </Router>
  );
}

export default App;
