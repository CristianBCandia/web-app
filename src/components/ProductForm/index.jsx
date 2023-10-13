import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { MonetaryInput } from '../MonetaryInput';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
export const ProductForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Nome">
          <Input />
        </Form.Item>
        <Form.Item label="Descrição">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Categoria">
          <Select>
            <Select.Option value="material-escolar">Material Escolar</Select.Option>
            <Select.Option value="brinquedo">Brinquedos</Select.Option>
            <Select.Option value="acessorios">Acessórios</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Preço">
            <MonetaryInput></MonetaryInput>
        </Form.Item>
        
        <Form.Item label="Ativo" valuePropName="checked">
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
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};