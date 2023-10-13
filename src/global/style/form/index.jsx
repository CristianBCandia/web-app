import { styled } from "styled-components";

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    ::placeholder {
        color: #555;
        font-weight: bold;
        opacity: 1; /* Firefox */
    }
    ::-ms-input-placeholder { /* Edge 12 -18 */
        color: #555;
    }
`

export const FormLoginTitle = styled.h1`
    font-family: 'Roboto';
    color: #dbdcff;
`

const FormInputDimentions = styled.input`
    width: 80%;
    height: 60px;
    font-size: 18px;
    font-family: 'Roboto';
    border-radius: 25px;
    border: none;
`

export const FormInput = styled(FormInputDimentions)`
    padding-left: 15px;
    outline: 0;
    background-color: #FFF;
`

export const FormBtnSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 80%;
    height: 60px;
    font-size: 18px;
    font-family: 'Roboto';
    border-radius: 25px;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: #FFF;
    border: solid 1px #FFF;
`