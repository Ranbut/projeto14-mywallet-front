import {Container, Logo, Formulario} from './styles.js'
import { useState, useContext } from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { UsuarioContext } from '../../contexts/UsuarioContext';

function Login(){

    const [clicado, setClicado] = useState(false);
    const [login, setLogin] = useState({email: "", password: ""});
    const {setUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate();

    return(
    <Container>
        <Logo>MyWallet</Logo>
        <Formulario>
        <input disabled={clicado} required type="email" placeholder="E-mail" value={login.email} onChange={e => setLogin({...login, email: e.target.value})}/>
        <input disabled={clicado} required type="password" placeholder="Senha" value={login.password} onChange={e => setLogin({...login, password: e.target.value} )}/>
        <button disabled={clicado} type="submit">
            Entrar
        </button>
        </Formulario>
        <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
    </Container>
    );
}

export default Login;