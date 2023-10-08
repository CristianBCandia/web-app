import { styled } from "styled-components"

export const AppBar = styled.div`
    width: 100vw;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 10vh;
    background-color: #5053f5;
    font-family: 'Roboto';
    color: #FFF;
    div {
        display: flex;
        align-items: center;
        font-weight: bold;
    }
    .search {
        background-color: #6568ff;
        border-radius: 8px;
        padding: 0 20px;
        width: 500px;
        input {
            outline: 0;
            height: 40px;
            border-radius: 8px;
            padding-left: 15px;
            border: none;
            width: 500px;
            background-color: #6568ff;
            color: #FFF;
            font-size: 17px;
        }
    }
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        li {
            height: 30px;
            cursor: pointer;
            box-sizing: border-box;
            color: #FFF;
            padding: 4px;
            list-style-type: none;
            
        }
        a {
            color: #FFF;
            text-decoration: none;
        }
        a:hover {
            border-bottom: solid 1px #FFF;
        }
        li:hover {
            border-bottom: solid 1px #FFF;
        }

        img {
            width: 40px;
            background-color: #FFF;
            border-radius: 40px;
        }
    }
    ::placeholder {
        color: #ffffffb7;
        opacity: 1; /* Firefox */
    }

    ::-ms-input-placeholder { /* Edge 12 -18 */
        color: #ffffffb7;
    }
`