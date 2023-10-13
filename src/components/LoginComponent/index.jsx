import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { LoginContainer, LoginFullScreen } from './style'

export const LoginComponent = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const { Title } = Typography;

    return (
        <LoginFullScreen>
            <LoginContainer >
                <Title level={2}>Faça login ou registre-se</Title>
                <Form
                    name="normal_login"
                    layout="vertical"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="usuário"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuário" />
                    </Form.Item>
                    <Form.Item
                        name="senha"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Senha"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Lembrar-me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Esqueci minha senha
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button> Ou <a href="">registre-se!</a>
                    </Form.Item>
                </Form>

                <LockOutlined style={{ fontSize: '250px', color: '#d6e4ff', marginLeft: '67vw' }}/>
            </LoginContainer>
        </LoginFullScreen>
    );
};