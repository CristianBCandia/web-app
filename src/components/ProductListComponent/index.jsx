import { useEffect, useState } from "react"
import { ProductList } from "./style"
import { UITableComponent } from "../UITableComponent"
import { AppBarComponent } from "../AppBarComponent"

export const ProductListComponent = props => {
    const url = 'https://products-ms.onrender.com/api/produtos'
    const [data, setData] = useState(null)
    const [keys, setKeys] = useState()
    useEffect(() => {
        if(data == null){
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const dataMapped = data.map(item => {
                        return {
                            ...item,
                            ativo: item.ativo ? 'Sim': 'Não'
                        }
                    })
                    setData(dataMapped)
                    return data
                })
                .then(data => console.log("data", data))
                .catch(err => console.log(err))
        }
    }, [])

    useEffect(() => {
        if(data) {
            setKeys(Object.keys(data[0]))
        }
    }, [data])



    return (
        <>
            <AppBarComponent>
            </AppBarComponent>
           { data && keys && <>
                <ProductList>
                <UITableComponent titles={['ID', 'Nome', 'Descrição', 'Preço', 'Ativo',	'Categoria', 'Quantidade Estoque']} data={data}></UITableComponent>
                </ProductList>
            </>}
        </>
        
    )
}