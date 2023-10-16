import { EditTwoTone, FormOutlined, PlusCircleOutlined, PlusOutlined, PlusSquareTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs'
import { TiPlusOutline } from 'react-icons/ti'
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Divider,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Space,
    Switch,
    TreeSelect,
    Upload,
    message,
} from 'antd';
import Title from 'antd/es/typography/Title';
import { doGet, doPost } from '../../api/ajax';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
export const ProductForm = ({ product }) => {

    const { id } = useParams(param => param.id)

    const [spinner, setSpinner] = useState(false)

    const [form] = Form.useForm();

    useEffect(() => {
        if(id) {
            setSpinner(true)
            console.log(id)
            const url = `http://localhost:8080/api/produtos/${id}`
            doGet(url)
                .then(product => {
                    form.setFieldsValue({
                        id: product.id,
                        nome: product.nome,
                        descricao: product.descricao,
                        categoria: product.categoria,
                        ativo: product.ativo,
                        preco: product.preco,
                        quantidade_estoque: product.quantidade_estoque
                    })
                    setSpinner(false)
                    console.log(product)
                })
        }
    }, [])

    const [componentDisabled, setComponentDisabled] = useState(false);

    const buttonItemLayout = {
        wrapperCol: {
            span: 14,
            offset: 6,
        },
    }

    const onFinish = (values) => {
        const body = id ? { ...values, id: id } : values
        const url = 'http://localhost:8080/api/produtos'
        doPost(url, body)
            .then(() => message.success('Produto salvo com sucesso!'))
            .catch(err => message.error('Falha ao salvar produto! '+ err))
        console.log(values)
    };

    const onFinishFailed = () => {
        message.error('Falha ao salvar produto!');
    };

    const onFill = () => {
        form.setFieldsValue({
            url: 'https://taobao.com/',
        });
    };

    return (
        spinner ? <Spinner /> : <Space direction="vertical" style={{ width: '100%' }} align='center'>

            <Divider plain>
                <Title>{ id ? <EditTwoTone /> : <TiPlusOutline /> }{ id ? " Editar Produto" : " Cadastrar Produto"}</Title>
            </Divider>
    
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                disabled={componentDisabled}
                style={{
                    minWidth: 800,
                    maxWidth: 1200,
                }}
            >
                <Form.Item name="nome" label="Nome"
                    rules={[{ required: true }, { type: 'name', warningOnly: false }, { type: 'string', min: 6 }]}>
                    <Input />
                </Form.Item >
                <Form.Item name="descricao" label="Descrição" rules={[
                    {
                        required: true,
                    },
                ]}>
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item name="categoria" label="Categoria" rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Select>
                        <Select.Option value="material-escolar">Material Escolar</Select.Option>
                        <Select.Option value="brinquedo">Brinquedos</Select.Option>
                        <Select.Option value="acessorios">Acessórios</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="preco" label="Preço" rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input
                        type='number'
                        style={{
                            width: 465,
                        }}
                        prefix="R$"
                        controls
                    />
                </Form.Item>
                <Form.Item name='quantidade_estoque' label="Quantidade em estoque" rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input type='number' />
                </Form.Item>
                <Form.Item name="ativo" label="Ativo" valuePropName="checked" rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Switch />
                </Form.Item>
                <Form.Item label="Imagens" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button block type="primary" htmlType='submit'>Salvar</Button>
                </Form.Item>
            </Form>
        </Space>
    );
};