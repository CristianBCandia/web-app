import { Form, FormBtnSubmit, FormInput, FormLoginTitle } from "../../global/style/form"
import { Login, LoginContainer, LoginIconContainer } from "./style"
import { FaRegUserCircle } from "react-icons/fa"
import { BiSolidLogInCircle } from "react-icons/bi"
import { Router, useNavigate } from "react-router-dom"

export const LoginComponent = props => {

    const navigate = useNavigate()

    function redirect() {
        navigate("/home") 
    }
    
    return (
        <LoginContainer>
            <Login>
                <Form>
                    <LoginIconContainer>
                        <FaRegUserCircle size={200} color="#FFF"></FaRegUserCircle>
                    </LoginIconContainer>
                    <FormInput placeholder="Digite seu e-mail"></FormInput>
                    <FormInput placeholder="Digite sua senha"></FormInput>
                    <FormBtnSubmit onClick={() => redirect()}>
                        <BiSolidLogInCircle size={25}></BiSolidLogInCircle>
                        Login
                    </FormBtnSubmit>
                </Form>
            </Login>
        </LoginContainer>
        
    )
}