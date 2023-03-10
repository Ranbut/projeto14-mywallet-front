import { TipoEntrada, FormularioRegistro, BotaoConfirmar } from './styles.js'
import { useState, useContext } from 'react';
import { ThreeDots } from  'react-loader-spinner';
import {URL_Registro} from '../../constants/urls.js'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UsuarioContext } from '../../contexts/UsuarioContext';

function NovaSaida(){

    const [clicado, setClicado] = useState(false);
    const [saida, setSaida] = useState({value: "", description: "", type: "saida"});
    const navigate = useNavigate();
    const {usuario} = useContext(UsuarioContext);

    function registrar(event){
        event.preventDefault();
        setClicado(true);
        const requisicao = axios.post(`${URL_Registro}`, saida, { headers: { 'Authorization': `Bearer ${usuario.token}` } });
        requisicao.then((res) => {alert(res.data); navigate("/home"); }) ;
        requisicao.catch((res) => {alert(res.response.data.message); setClicado(false);});
    }

    return(
    <>
        <TipoEntrada>
            Nova Saída
            <FormularioRegistro onSubmit={registrar} clicado={clicado}>
                <input disabled={clicado} required type="text" placeholder="Valor" value={saida.value} onChange={e => setSaida({...saida, value: e.target.value})}/>
                <input disabled={clicado} required type="text" placeholder="Descrição" value={saida.description} onChange={e => setSaida({...saida, description: e.target.value})}/>
                <BotaoConfirmar onClick={registrar} disabled={clicado} type="submit">
                {clicado ? <ThreeDots
                        height="13" 
                        width="51" 
                        radius="9"
                        color="#ffffff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={clicado} /> : 'Salvar saída'}
                </BotaoConfirmar>
            </FormularioRegistro>
        </TipoEntrada>
    </>
    );
}

export default NovaSaida;