import React from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb, Input ,Avatar, Button, Row, Col} from 'antd';
import { SearchOutlined , UserOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const handleUserClick = () => {
  window.location.href = "/personal/my";
}

const handleShoppingClick = () => {
  window.location.href = "/personal/shoppinglist";
}

const BasicLayout: React.FC = props => {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" >
        <div style={{width:1400}}>
        <Row >
          <Col span={10}>
            <Avatar src="logo.png"/>
          </Col>
          <Col span={2} ><a href="/">首页</a></Col>
          <Col span={4}>
            <Input placeholder="清输入搜索内容" prefix={<SearchOutlined/>}/>
          </Col>
          <Col span={1}><Button>搜索</Button></Col>
          <Col span={5} offset={1}>
            <Button size="small" ghost icon={<SearchOutlined/>} onClick={handleShoppingClick}>购物车</Button>
            <Button size="small" ghost icon={<UserOutlined/>} onClick={handleUserClick}>个人中心</Button>
          </Col>
        </Row>
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
