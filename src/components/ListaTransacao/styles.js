import styled from "styled-components";

const ListContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  padding: 2.3rem 1.1rem 1rem;
  min-height: 44.6rem;
  background-color: #fff;
  font-size: 2rem;
  color: #868686;
  border-radius: 0.5rem;
  text-align: center;

  font-family: 'Raleway';
  display: flex;
  flex-grow: 3;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.possuiTransacao ? 'space-between' : 'center'};

  & > p {
    width: 18rem;
  }
`;

const ListTransacao = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-family: 'Raleway';
`;

const ValorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway';

  span{
    color: #000;
    font-weight: 700;
  }
`;

const Valor = styled.p`
  font-family: 'Raleway';
  color : ${props => props.balanco ? '#03AC00' : '#C70000'};
`;

export {ListContainer, ListTransacao, ValorContainer, Valor};