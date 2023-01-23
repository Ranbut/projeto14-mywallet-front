import { useContext } from 'react';
import { UsuarioContext } from '../../contexts/UsuarioContext';
import { TopoContainer, BotoesContainer } from './styles';
import { Link, useNavigate } from "react-router-dom";
import BotaoTransacao from '../../components/BotaoTransacao/BotaoTransacao.js';
import ListaTransacao from '../../components/ListaTransacao/ListaTransacao.js';

function Home(){

    const {usuario, setUsuario} = useContext(UsuarioContext);

    const navigate = useNavigate();

    function logOut(){
        setUsuario({
            name: '',
            email: '',
            transactions: []
          });
          navigate('/');
    }

    return(
    <>
        <TopoContainer>
            <p>Olá, {usuario.name}</p>
            <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
        </TopoContainer>
        <ListaTransacao />
        <BotoesContainer>
            <Link to={"/nova-entrada"}>
                <BotaoTransacao type={"entrada"} />
            </Link>
            <Link to={"/nova-saida"}>
                <BotaoTransacao type={"saida"} />
            </Link>
        </BotoesContainer>
    </>
    );
}

export default Home;