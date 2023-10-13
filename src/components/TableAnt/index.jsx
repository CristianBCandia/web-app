import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Space, Table, Input, theme, Layout, Menu, Breadcrumb } from 'antd';
import { useNavigation } from 'react-router-dom';
import Spinner from '../Spinner';
const { Header, Content, Footer } = Layout;


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
                    setHasData(true)
                    setIsLoading(false)
                    return data
                })
                .then(data => console.log("data", data))
                .catch(err => console.log(err))
        }
    }, [])

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
        const tc = Object.keys(data[0]).map(item => {
            return {
                title: item,
                dataIndex: item,
              }
        })
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