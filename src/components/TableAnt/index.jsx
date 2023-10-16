import React, { useState, useEffect } from 'react';
import { Space, Table } from 'antd';
import Spinner from '../Spinner';
import { doGet } from '../../api/ajax';


const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';

const TableAnt = () => {

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

  const [isLoading, setIsLoading] = useState(true)

  const url = 'http://localhost:8080/api/produtos'
    const [data, setData] = useState(null)

    useEffect(() => {
        if (data == null) {
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
    }, [])

    const editProduct = (id) => {
        console.log("editando produto de id "+ id)
    }

    const deleteProduct = (id) => {

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
    if(data && !tableColumns) {
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
                <a onClick={() => editProduct(record)}>Editar</a>
                <a onClick={() => deleteProduct(record)}>Excluir</a>
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
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };
  return (<>
        { !isLoading ? <Table
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