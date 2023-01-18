import {Container, Logo, Formulario} from './styles.js'
import { useState } from 'react';
import { Link ,useNavigate } from "react-router-dom";
import {URL_Cadastro} from '../../constants/urls.js'
import { ThreeDots } from  'react-loader-spinner';
import axios from 'axios';

function Cadastro(){

    const [clicado, setClicado] = useState(false);
    const [cadastro, setCadastro] = useState({nome:"", email: "", password: ""});
    const [senhaConfirma, setSenhaConfirma] = useState("");
    const navigate = useNavigate();

    function cadastrar(event){
        event.preventDefault();
        if(senhaConfirma.senhaConfirma === cadastro.password){
            setClicado(true);
            const requisicao = axios.post(`${URL_Cadastro}`, cadastro);
            requisicao.then(() => navigate("/")) ;
            requisicao.catch((res) => {alert(res); setClicado(false);}) ;
        }
        else{
            alert("A confirmação de senha não confere.\nVerifique se sua senha foi digitada corretamente.");
        }
    }

    return(
    <Container>
        <Logo>MyWallet</Logo>
        <Formulario onSubmit={cadastrar} clicado={clicado}>
        <input disabled={clicado} required type="text" placeholder="Nome" value={cadastro.name} onChange={e => setCadastro({...cadastro, name: e.target.value})}/>
        <input disabled={clicado} required type="email" placeholder="E-mail" value={cadastro.email} onChange={e => setCadastro({...cadastro, email: e.target.value} )}/>
        <input disabled={clicado} required type="password" minLength={6} placeholder="Senha" value={cadastro.password} onChange={e => setCadastro({...cadastro, password: e.target.value} )}/>
        <input disabled={clicado} required type="password" minLength={6} placeholder="Confirme a senha" onChange={e => setSenhaConfirma({senhaConfirma: e.target.value})}/>
        <button disabled={clicado} type="submit">
        {clicado ? <ThreeDots
                        height="13" 
                        width="51" 
                        radius="9"
                        color="#ffffff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={clicado} /> : 'Cadastrar'}
        </button>
        </Formulario>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>);
}

export default Cadastro;