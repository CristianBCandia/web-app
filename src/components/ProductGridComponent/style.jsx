import styled from 'styled-components'

export const ProductGridStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 0 auto;
    /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
`

export const ProductGridCard = styled.div`
    border-radius: 8px;
    width: 350px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`

export const ProductGridCardDescription = styled.div`
    height: 30%;
    width: 100%;
    `

export const ProductGridCardBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    img {
        width: 90%;
        max-width: 70%;
        max-height: 90%;
    }
`
export const ProductDescriptionText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 16px;
    font-family: "Roboto";
    padding: 20px;
`

