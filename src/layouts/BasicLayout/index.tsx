import React from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb, Input ,Avatar, Button} from 'antd';
import { SearchOutlined , UserOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const BasicLayout: React.FC = props => {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" >
        <div>
          <Avatar src="logo.png"/>
        </div>
        <div style={{marginLeft: 600}}>首页</div>
        <div style={{marginLeft: 200}}>
          <Input placeholder="清输入搜索内容" prefix={<SearchOutlined/>}/>
        </div>
        <div><Button>搜索</Button></div>
        <div style={{marginLeft: 30}}>
          <Button ghost icon={<SearchOutlined/>} href="">购物车</Button>
          <Button ghost icon={<UserOutlined/>} href="personal/my">个人中心</Button>
        </div>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 0', marginTop: 20 }}>
      <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
        {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
};

export default BasicLayout;
