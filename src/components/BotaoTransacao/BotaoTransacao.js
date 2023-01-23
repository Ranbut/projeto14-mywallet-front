import {StyledContainer} from './style.js'

function BotaoTransacao ({ type }) {
    return (
      <StyledContainer>
        {type === 'entrada' &&
            <div><ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
            </div>
        }
        {type === 'saida' &&
            <div>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova saída</p>
            </div>
        }
      </StyledContainer>
    );
  };

export default BotaoTransacao;