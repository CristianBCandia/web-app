import { styled } from "styled-components";

export const UITableContainer = styled.div`
    
`

export const UITable = styled.table`
    border-collapse: collapse;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    border: solid 1px #858585;
    text-align: center;
    width: 60vw;
    font-family: 'Roboto', sans-serif;
    thead {
        tr {
            height: 40px;
            th {
                padding: 5px;
            }
        }
    }
    tbody {
        tr {
            height: 30px;
            td {
                padding: 5px;
            }
        }
    }

`