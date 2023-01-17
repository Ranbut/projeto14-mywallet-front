import {Container, Logo, Formulario} from './styles.js'
import { useState, useContext } from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { UsuarioContext } from '../../contexts/UsuarioContext';

function Cadastro(){

    const [clicado, setClicado] = useState(false);
    const [cadastro, setCadastro] = useState({email: "", password: ""});
    const {setUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate();

    return(
    <Container>
        <Logo>MyWallet</Logo>
        <Formulario>
        <input disabled={clicado} required type="text" placeholder="Nome" value={cadastro.name} onChange={e => setCadastro({...cadastro, name: e.target.value})}/>
        <input disabled={clicado} required type="email" placeholder="E-mail" value={cadastro.email} onChange={e => setCadastro({...cadastro, email: e.target.value} )}/>
        <input disabled={clicado} required type="password" placeholder="Senha" value={cadastro.password} onChange={e => setCadastro({...cadastro, password: e.target.value} )}/>
        <input disabled={clicado} required type="password" placeholder="Confirme a senha" value={cadastro.confirmPassword} onChange={e => setCadastro({...cadastro, confirmPassword: e.target.value} )}/>
        <button disabled={clicado} type="submit">
            Cadastrar
        </button>
        </Formulario>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>);
}

export default Cadastro;