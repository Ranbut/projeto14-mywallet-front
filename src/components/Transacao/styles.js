import styled from "styled-components";

const StyledTransacao = styled.div`
  display: flex;
  font-family: 'Raleway';
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const StyledData = styled.p`
  color: #C6C6C6;
  font-family: 'Raleway';
  font-size: 1.6rem;
`;

const StyledDescricao = styled.div`
  color: #000;
  font-family: 'Raleway';
  font-size: 1.6rem;
  width: 100%;
  text-align: left;
  p{
    cursor: pointer;
    width: fit-content;
  }
`;

const StyledValor = styled.p`
  font-family: 'Raleway';
  color: ${props => props.type === 'entrada' ? '#03AC00' : '#C70000'};
  font-size: 1.6rem;
`;

export {StyledTransacao, StyledData, StyledDescricao, StyledValor};