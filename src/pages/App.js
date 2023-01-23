import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './globalStyles.js';
import Login from './Login/Login.js' 
import Cadastro from './Cadastro/Cadastro.js';
import { UsuarioContext } from '../contexts/UsuarioContext';
import Home from './Home/Home.js';
import NovaEntrada from './NovaEntrada/NovaEntrada.js';
import NovaSaida from './NovaSaida/NovaSaida.js';

function App() {

  const [usuario, setUsuario] = useState({ name: "" ,email: "", password: "", type: "saida"});

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
          <Route path="/" element={
          <UsuarioContext.Provider value={{ setUsuario }}>
            <Login />
          </UsuarioContext.Provider>
          } />
          <Route path="/cadastro" element={
          <UsuarioContext.Provider value={{ setUsuario }}>
            <Cadastro />
          </UsuarioContext.Provider>
          } />
        <Route path="/home" element={
          <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            <Home />
          </UsuarioContext.Provider>
          } />
        <Route path="/nova-entrada" element={
          <UsuarioContext.Provider value={{ usuario }}>
            <NovaEntrada />
          </UsuarioContext.Provider>
        } />
        <Route path="/nova-saida" element={
          <UsuarioContext.Provider value={{ usuario }}>
            <NovaSaida />
          </UsuarioContext.Provider>
        } />
        <Route path="/editar-entrada"/>
        <Route path="/editar-saida"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
