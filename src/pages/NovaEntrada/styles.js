import styled from "styled-components";

const TipoEntrada = styled.div`
    margin: 24px 25px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    text-decoration: none;
`;

const FormularioRegistro = styled.div` 
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
    input{
        width: 100%;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        color: #000000;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: 13px;
    }
    input::placeholder{
        text-align: center;
        color: #000000;
    }
`;

const BotaoConfirmar = styled.button`
    margin-top: 13px;
    width: 100%;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23.48px;
    color: #FFFFFF;
`;

export {TipoEntrada, FormularioRegistro, BotaoConfirmar};