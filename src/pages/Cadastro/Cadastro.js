import {Container, Logo, Formulario} from './styles.js'
import { useState } from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';
import { cadastroAPI } from "../../api/cadastroAPI.js";

function Cadastro(){

    const [clicado, setClicado] = useState(false);
    const [cadastro, setCadastro] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      });
    const navigate = useNavigate();

    async function cadastrar(event){
        event.preventDefault();
        const passwordMatch = cadastro.password === cadastro.passwordConfirmation;
        if (!passwordMatch) return window.alert('Senha e confirmação devem ser iguais');
    
        setClicado(true);
        const body = delete cadastro.passwordConfirmation;
        const CadastroRes = await cadastroAPI(body);
    
        setClicado(false);
        if (!CadastroRes.success) return window.alert(CadastroRes.error);
    
        navigate('/');
    }

    return(
    <Container>
        <Logo>MyWallet</Logo>
        <Formulario onSubmit={cadastrar} clicado={clicado}>
        <input disabled={clicado} required type="text" placeholder="Nome" value={cadastro.name} onChange={e => setCadastro({...cadastro, name: e.target.value})}/>
        <input disabled={clicado} required type="email" placeholder="E-mail" value={cadastro.email} onChange={e => setCadastro({...cadastro, email: e.target.value} )}/>
        <input disabled={clicado} required type="password" minLength={6} placeholder="Senha" value={cadastro.password} onChange={e => setCadastro({...cadastro, password: e.target.value} )}/>
        <input disabled={clicado} required type="password" minLength={6} placeholder="Confirme a senha" onChange={e => setCadastro({...cadastro, passwordConfirmation: e.target.value})}/>
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