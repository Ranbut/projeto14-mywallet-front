import styled from "styled-components";

const TopoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 24px;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon
    {
        height: 141px;
        width: 31px;
        padding-left: 163px;
        color: #FFFFFF;
    }
`;

const BotoesContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 13px;
    margin-left: 15px;
    justify-content: center;
    
    div{
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
    }

    ion-icon
    {
        margin-top: 10.56px;
        margin-left: 9.56px;
        height: 21.88px;
        width: 21.88px;
        color: #FFFFFF;
    }

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        width: 64px;
        height: 40px;
        margin-top: 32.56px;
        margin-left: 10px;
    }
    a{
        text-decoration: none;
    }
`;


export {TopoContainer, BotoesContainer};