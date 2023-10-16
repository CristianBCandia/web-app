import React, { useState, useEffect } from 'react';
import { Space, Table, Modal, message } from 'antd';
import Spinner from '../Spinner';
import { doDelete, doGet } from '../../api/ajax';
import { ProductForm } from '../ProductForm';
import { useNavigate } from 'react-router-dom';
import { confirmModal } from '../Modal/ConfirmModal';
import { DeleteFilled, DeleteTwoTone, EditFilled, EditTwoTone, ExclamationCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;


const defaultExpandable = {
    expandedRowRender: (record) => <p>{record.description}</p>,
};
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';

const TableAnt = () => {

    const [modal, contextHolder] = Modal.useModal();

    const [reload, setReload] = useState()

    const [bordered, setBordered] = useState(false);
    const [loading, setLoading] = useState(false);
    const [size, setSize] = useState('large');
    const [expandable, setExpandable] = useState(defaultExpandable);
    const [showTitle, setShowTitle] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [showfooter, setShowFooter] = useState(true);
    const [rowSelection, setRowSelection] = useState({});
    const [hasData, setHasData] = useState(false);
    const [tableLayout, setTableLayout] = useState();
    const [top, setTop] = useState('none');
    const [bottom, setBottom] = useState('bottomRight');
    const [ellipsis, setEllipsis] = useState(false);
    const [yScroll, setYScroll] = useState(false);
    const [xScroll, setXScroll] = useState();

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    const [edit, setEdit] = useState(null)

    const url = 'http://localhost:8080/api/produtos'
    const [data, setData] = useState(null)

    const config = {
        title: 'Use Hook!',
        content: (
          <>
            Deletando produto...
          </>
        ),
      };

    useEffect(() => {
        if (data == null || reload) {
            doGet(url)
                .then(data => {
                    const dataMapped = data.map(item => {
                        return {
                            ...item,
                            ativo: item.ativo ? 'Sim' : 'Não'
                        }
                    })
                    setData(dataMapped)
                    setHasData(true)
                    setIsLoading(false)
                    return data
                })
                .then(data => console.log("data", data))
                .catch(err => console.log(err))
        }
    }, [reload])

    const editProduct = (product) => {
        navigate(`/cadastro-produto/${product.id}`)
    }

    const deleteProduct = ({ nome, id }) => {
        confirm({
            title: 'Tem certeza que deseja deletar o produto ' + nome,
            icon: <ExclamationCircleFilled />,
            content: 'Ao deletar o produto ele sairá da lista de produtos do seu site.',
            okText: 'Sim',
            okType: 'danger',
            cancelText: 'Não',
            onOk() {
                doDelete(`${url}/${id}`)
                    .then(response => {
                        message.success('Produto deletado com sucesso!')
                        modal.info(config);
                        setReload(!reload)
                    })
                    .catch(err => message.error('Erro ao tentar deletar produto!'))
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const scroll = {};
    if (yScroll) {
        scroll.y = 240;
    }
    if (xScroll) {
        scroll.x = '100vw';
    }

    const [tableColumns, setTableColumns] = useState(null)

    useEffect(() => {
        if (data && !tableColumns) {
            let tc = Object.keys(data[0]).map(item => {
                return {
                    title: item,
                    dataIndex: item,
                }
            })
            tc = [...tc, {
                title: 'Ações',
                key: 'acoes',
                render: (_, record) => (
                    <Space size="middle">
                        <EditTwoTone twoToneColor="#fa8c16" onClick={() => editProduct(record)} />
                        <DeleteTwoTone twoToneColor="#ff4d4f" onClick={() => deleteProduct(record)} />
                    </Space>
                ),
            }]
            setTableColumns(tc)
        }
    }, [data])

    if (xScroll === 'fixed') {
        tableColumns[0].fixed = true;
        tableColumns[tableColumns.length - 1].fixed = 'right';
    }
    const tableProps = {
        bordered,
        loading,
        size,
        // expandable,
        title: showTitle ? defaultTitle : undefined,
        showHeader,
        footer: showfooter ? defaultFooter : undefined,
        // rowSelection,
        scroll,
        tableLayout,
    };
    return (<>
        {!isLoading ? <Table
            {...tableProps}
            pagination={{
                position: [top, bottom],
            }}
            columns={tableColumns}
            dataSource={data && tableColumns ? data : []}
            scroll={scroll}
        />
            : <Spinner />
        }
    </>

    )
}

export default TableAnt;