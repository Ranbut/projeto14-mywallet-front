import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles.js';
import Login from './Login/Login.js' 
import Cadastro from './Cadastro/Cadastro.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home"/>
        <Route path="/nova-entrada"/>
        <Route path="/nova-saida"/>
        <Route path="/editar-entrada"/>
        <Route path="/editar-saida"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
