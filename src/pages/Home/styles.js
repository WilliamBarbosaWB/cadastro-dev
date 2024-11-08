
//estilização do nosso projeto principal dentro do react 

import styled from 'styled-components'


export const Container = styled.div ` //estilização do nosso corpo da página
    background-color:#002f38;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    padding:20px;
    height:100vh;

`

export const TopBackground = styled.div `
    background: linear-gradient(to right, #e88e5e, #7f3831);
    height:30vh;
    width:90vw;
    max-width:800px;
    border-radius:30px;

    display:flex;
    align-items:color-interpolation-filters;
    justify-content:center;

    img {
        max-width:100%;
        max-height:100%
    }

`
export const Form = styled.form `

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 20px;
    max-width: 500px;

`

export const Title = styled.h2`

    color:#ffffff;
    font-size:40px;
    text-align:center;
    font-weight:700;

`

export const ContainerInputs = styled.div `

    display:flex;
    gap: 20px;

`

export const Input = styled.input `
    border-radius:10px;
    border: 1px solid #d2dae2;
    background-color:#fff;
    padding: 12px 20px;
    outline:none;
    width:100%;

`

export const InputLabel = styled.label `
    color:#ffffff;
    font-size:12px;
    font-weight:500;

    span{
        color:#ef4f45;
        font-weight:bold;
    }

`

export const Button = styled.button `

    border: none;
    background:linear-gradient(180deg, #fa7a4d 0%, #ff6378 100%);
    padding: 16px 32px;
    font-size:16px;
    color: #fff;
    border-radius:15px;
    width:fit-content;
    cursor: pointer;

    &:hover {
        opacity:0.8;
    }

    &:active {
        opacity:0.5;
    }
   
`

