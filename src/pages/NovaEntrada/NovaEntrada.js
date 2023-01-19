import { TipoEntrada, FormularioRegistro, BotaoConfirmar } from './styles.js'
import { useState, useContext } from 'react';
import { ThreeDots } from  'react-loader-spinner';
import {URL_Registro} from '../../constants/urls.js'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UsuarioContext } from '../../contexts/UsuarioContext';


function NovaEntrada(){

    const [clicado, setClicado] = useState(false);
    const [entrada, setEntrada] = useState({value: "", description: "", type: "entrada"});
    const navigate = useNavigate();
    const {usuario} = useContext(UsuarioContext);

    function registrar(event){
        event.preventDefault();
        setClicado(true);
        const requisicao = axios.post(`${URL_Registro}`, entrada, { headers: { 'Authorization': `Bearer ${usuario.token}` } });
        requisicao.then((res) => {alert(res.data); navigate("/home"); }) ;
        requisicao.catch((res) => {alert(res.data); setClicado(false);});
    }

    return(
    <>
        <TipoEntrada>
            Nova Entrada
            <FormularioRegistro onSubmit={registrar} clicado={clicado}>
                <input disabled={clicado} required type="text" placeholder="Valor" value={entrada.value} onChange={e => setEntrada({...entrada, value: e.target.value})}/>
                <input disabled={clicado} required type="text" placeholder="Descrição" value={entrada.description} onChange={e => setEntrada({...entrada, description: e.target.value})}/>
                <BotaoConfirmar onClick={registrar} disabled={clicado} type="submit">
                {clicado ? <ThreeDots
                        height="13" 
                        width="51" 
                        radius="9"
                        color="#ffffff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={clicado} /> : 'Salvar entrada'}
                </BotaoConfirmar>
            </FormularioRegistro>
        </TipoEntrada>
    </>
    );
}

export default NovaEntrada;