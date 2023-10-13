import { Link } from "react-router-dom"
import { AppBar } from "./style"
import { AudioOutlined } from '@ant-design/icons';
import MenuAnt from "../MenuAnt"
import { Content } from "antd/es/layout/layout"
import { Input, Space } from 'antd';


export const AppBarComponent = props => {

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <Content>
                
        </Content>
    )
}