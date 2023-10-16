import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

const { confirm } = Modal;

export const confirmModal = (props) => {
       return confirm({
          title: 'Tem certeza que deseja deletar o produto ' + props.nome,
          icon: <ExclamationCircleFilled />,
          content: 'Ao deletar o produto ele sairá da lista de produtos do seu site.',
          okText: 'Sim',
          okType: 'danger',
          cancelText: 'Não',
          onOk() {
            console.log('deletando registro ' + props.id);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
}