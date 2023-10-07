import styled from  'styled-components'


const StyledButton = styled.button`
    display: flex;
    width: 200px;
    background-color: ${props => props.bgColor};
    color: #FFF;
    border: ${props => props.borda}
`
export const Button = styled(StyledButton)`
    background-color: green;
`

export default StyledButton