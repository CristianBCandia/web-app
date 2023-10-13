import { styled } from "styled-components"

export const AppBar = styled.div`
    display: flex;
    box-sizing: border-box;
    font-size: 17px;
    align-items: center;
    justify-content: center;
    height: 10vh;
    font-family: 'Roboto';
    color: #FFF;
    div {
        display: flex;
        align-items: center;
        font-weight: bold;
    }
    .search {
        border-radius: 8px;
        padding: 0 20px;
        height: 45px;
        width: 500px;
        input {
            outline: 0;
            height: 45px;
            border-radius: 8px;
            padding-left: 15px;
            border: none;
            width: 500px;
            color: #595959;
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
        color: #595959;
        opacity: 1; /* Firefox */
    }

    ::-ms-input-placeholder { /* Edge 12 -18 */
        color: #595959;
    }
`