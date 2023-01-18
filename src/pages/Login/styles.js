import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%;
    a{
        margin-top: 36px;
        font-family: 'Raleway' , sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
    }
`;

const Logo = styled.h4`
    font-family: 'Saira Stencil One', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`;

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 33px;
    input{
        width: 326px;
        height: 58px;
        background-color: "#FFFFFF";
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        border: none;
        padding-left: 11px;
        margin-bottom: 6px;
        color: #000000;
    }
    button{
        margin-top: 13px;
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border-radius: 5px;
        color: #FFFFFF;
        border: none;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export {Container, Logo, Formulario};