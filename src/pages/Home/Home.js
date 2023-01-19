import { useContext, useState, useEffect } from 'react';
import { UsuarioContext } from '../../contexts/UsuarioContext';
import { TopoContainer, RegistrosContainer, BotoesContainer } from './styles';
import { Link } from "react-router-dom";
import {URL_Registro} from '../../constants/urls.js'
import axios from 'axios';

function Home(){

    const {usuario} = useContext(UsuarioContext);

    const [registros, setRegistros] = useState([]);

    useEffect(() => { 
        const requisicao = axios.get(`${URL_Registro}`, { headers: { 'Authorization': `Bearer ${usuario.token}` } });
        requisicao.then((res) => {
            setRegistros(res.data);
        });
        requisicao.catch((res) => { alert(res.response.data.message); });
    }, registros);

    return(
    <>
        <TopoContainer>
            <p>Olá, {usuario.name}</p>
            <Link to={"/"}><ion-icon name="log-out-outline"></ion-icon></Link>
        </TopoContainer>
        <RegistrosContainer>
            <p>{(registros.length > 0) ? "Tem registro." : "Não tem registro."}</p>
        </RegistrosContainer>
        <BotoesContainer>
            <Link to={"/nova-entrada"}>
                <div><ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
                </div>
            </Link>
            <Link to={"/nova-saida"}>
            <div>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova saída</p>
            </div>
            </Link>
        </BotoesContainer>
    </>
    );
}

export default Home;