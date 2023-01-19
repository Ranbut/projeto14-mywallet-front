import {Container, Logo, Formulario} from './styles.js'
import { useState, useContext, useEffect } from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { UsuarioContext } from '../../contexts/UsuarioContext';
import {URL_Login} from '../../constants/urls.js'
import { ThreeDots } from  'react-loader-spinner';
import axios from 'axios';

function Login(){

    const [clicado, setClicado] = useState(false);
    const [login, setLogin] = useState({email: "", password: ""});
    const {setUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate();

    useEffect(() => { 
        setUsuario({name: "", email: "", password: "", token: ""});
    }, [setUsuario]);

    function entrar(event){
        event.preventDefault();
        setClicado(true);
        const requisicao = axios.post(`${URL_Login}`, login);
        requisicao.then((res) => {setUsuario(res.data); navigate("/home"); }) ;
        requisicao.catch((res) => {alert(res.data); setClicado(false);});
    }

    return(
    <Container>
        <Logo>MyWallet</Logo>
        <Formulario onSubmit={entrar} clicado={clicado}>
            <input disabled={clicado} required type="email" placeholder="E-mail" value={login.email} onChange={e => setLogin({...login, email: e.target.value})}/>
            <input disabled={clicado} required type="password" placeholder="Senha" value={login.password} onChange={e => setLogin({...login, password: e.target.value} )}/>
            <button disabled={clicado} type="submit">
            {clicado ? <ThreeDots
                        height="13" 
                        width="51" 
                        radius="9"
                        color="#ffffff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={clicado} /> : 'Entrar'}
            </button>
        </Formulario>
        <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
    </Container>
    );
}

export default Login;