import { useContext } from 'react';
import { UsuarioContext } from '../../contexts/UsuarioContext';
import { TopoContainer, RegistrosContainer, BotoesContainer } from './styles';
import { Link } from "react-router-dom";


function Home(){
    const {usuario} = useContext(UsuarioContext);
    return(
    <>
        <TopoContainer>
            <p>Olá, {usuario.name}</p>
            <Link to={"/"}><ion-icon name="log-out-outline"></ion-icon></Link>
        </TopoContainer>
        <RegistrosContainer>
            <p>Não há registros de entrada ou saída</p>
        </RegistrosContainer>
        <BotoesContainer>
            <Link to={"/nova-entrada"}>
                <div><ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
                </div>
            </Link>
            <Link to={"/saida-entrada"}>
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