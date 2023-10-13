import React,{ useEffect, useState } from 'react';
import { Breadcrumb, Input, Layout, Menu, Space, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import Search from 'antd/es/input/Search';
import { ProductList } from "./style"
import { UITableComponent } from "../UITableComponent"

export const ProductListComponent = props => {
    const url = 'https://products-ms.onrender.com/api/produtos'
    const [data, setData] = useState(null)
    const [keys, setKeys] = useState()

    const { Search } = Input;

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const {
        token: { colorBgContainer, colorBgElevated },
    } = theme.useToken();


    useEffect(() => {
        if (data == null) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const dataMapped = data.map(item => {
                        return {
                            ...item,
                            ativo: item.ativo ? 'Sim' : 'Não'
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
        if (data) {
            setKeys(Object.keys(data[0]))
        }
    }, [data])



    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        background: colorBgContainer,
                    }}
                >
                    <div className="demo-logo" />
                    <Search size="large" style={{ width: 500 }} placeholder="Buscar produto..." onSearch={onSearch} />
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['2']}

                        // items={new Array(3).fill(null).map((_, index) => ({
                        //     key: String(index + 1),
                        //     label: `nav ${index + 1}`,
                        // }))}
                        items={new Array(
                            { key: "1", label: "Produtos" },
                            { key: "2", label: "Cadastro" }
                        )}
                    />
                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 380,
                            background: colorBgElevated,
                        }}
                    >
                        {data && keys && <>
                            <ProductList>
                                <UITableComponent titles={['ID', 'Nome', 'Descrição', 'Preço', 'Ativo', 'Categoria', 'Quantidade Estoque']} data={data}></UITableComponent>
                            </ProductList>
                        </>}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>

        </>

    )
}