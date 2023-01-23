
import { useEffect, useContext } from "react";
import {ListContainer, ListTransacao, ValorContainer, Valor} from "./styles.js";
import Transacao from "../Transacao/Transacao.js";
import { useState } from "react";
import {URL_Registro} from '../../constants/urls.js'
import axios from 'axios';
import { UsuarioContext } from "../../contexts/UsuarioContext";

function ListaTransacao () {

    const {usuario} = useContext(UsuarioContext);
    const [registros, setRegistros] = useState([]);

  useEffect(() => { 
    const requisicao = axios.get(`${URL_Registro}`, { headers: { 'Authorization': `Bearer ${usuario.token}` } });
    requisicao.then((res) => {
        setRegistros(res.data);
    });
    requisicao.catch((res) => { alert(res.response.data.message); });
});

const valorTotal = registros.reduce((sum, transaction) => {
    if (transaction.type === 'entrada') {
      return sum += transaction.value;
    }else{
    return sum -= transaction.value;
    }
  }, 0);

  return (
    <ListContainer possuiTransacao={registros.length > 0}>
      {registros.length === 0 ?
        <p>
          Não há registros de
          entrada ou saída
        </p>
        :
        <>
          <ListTransacao>
            {registros.map(
              (transaction, id) => <Transacao transaction={transaction} key={id}/>
            )}
          </ListTransacao>
          <ValorContainer>
            <span>SALDO</span>
            <Valor balanco={valorTotal >= 0}>
              {Number(valorTotal).toLocaleString('pt-br', {
                minimumFractionDigits: 2
              })}
            </Valor>
          </ValorContainer>
        </>
      }
    </ListContainer>
  );
};

export default ListaTransacao;