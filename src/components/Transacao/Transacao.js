import {StyledTransacao, StyledData, StyledDescricao, StyledValor} from './styles.js'

export const Transacao = ({ transaction }) => {
  const { value, description, type , date } = transaction;

  console.log(value)

  return (
    <StyledTransacao>
      <StyledData>
        {date}
      </StyledData>
      <StyledDescricao >
        <p>
          {description}
        </p>
      </StyledDescricao >
      <StyledValor type={type}>
        {Number(value).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </StyledValor >
    </StyledTransacao>
  );
};

export default Transacao;