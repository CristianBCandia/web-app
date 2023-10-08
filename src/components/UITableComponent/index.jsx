import { useEffect } from "react"
import { UITable } from "./style"

export const UITableComponent = ({ titles, data }) => {

    useEffect(() => {
        console.log(titles)
    }, [])

    return (
        <UITable border={1}>
            <thead>
                <tr>
                    { titles.map(title => <th>{ title }</th>) }
                </tr>
            </thead>
            <tbody>
                { data.map(item => <tr>{Object.keys(item).map(key => <td>{ item[key] }</td>)}</tr>)}
            </tbody>
        </UITable>
    )
}