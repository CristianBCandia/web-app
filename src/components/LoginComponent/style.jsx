import { styled } from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #0b0ecf;
`

export const Login = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: #0b0ecf;
    border-radius: 8px;
    display: flex;
    width: 50vw;
    height: 60vh;
`

export const LoginIconContainer = styled.div`
    position: absolute;
    top: -150px;
    background-color: #0b0ecf;
    padding: 20px;
    border-radius: 150px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`