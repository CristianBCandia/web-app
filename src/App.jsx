import React from 'react';
import { Input, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './global/style.css'
import { BsStack } from 'react-icons/bs'
import { TiPlusOutline } from 'react-icons/ti'
import { BreadcrumbComponent } from './components/Breadcrumb';

function App() {

    const navigate = useNavigate()

    const { Search } = Input;

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const {
        token: { colorBgContainer, colorBgElevated },
    } = theme.useToken();

    const onClick = ({ key }) => {
        navigate(key)
    }
    return (
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
                    style={{ width: '500px' }}
                    onClick={onClick}
                    mode="horizontal"
                    items={ new Array(
                        { key: "/estoque", label: "Estoque",  icon: <BsStack />},
                        { key: "/cadastro-produto", label: "Cadastrar Produto", icon: <TiPlusOutline /> }
                        )}
                />
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                }}
            >
              <BreadcrumbComponent />
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgElevated,
                    }}
                >
                    <Outlet />
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
    
    
  )
}

export default App
