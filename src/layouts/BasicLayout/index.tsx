import React from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb, Input, Avatar, Button, Row, Col } from 'antd';
import {
  LeftCircleTwoTone,
  RightCircleTwoTone,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from '@/assets/logo.png';

const { Header, Content, Footer } = Layout;

const handleUserClick = () => {
  window.location.href = '/personal/my';
};

const handleShoppingClick = () => {
  window.location.href = '/personal/shoppinglist';
};

const BasicLayout: React.FC = props => {
  const { Search } = Input;
  return (
    <Layout>
      <Header style={{ width: '100%', padding: '0px' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              height: '30px',
              backgroundColor: 'white',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                marginLeft: '50px',
                alignItems: 'center',
                paddingTop: '5px',
              }}
            >
              <div style={{ marginRight: '10px' }}>
                <LeftCircleTwoTone style={{ fontSize: '20px' }} />
              </div>
              <div>
                <RightCircleTwoTone style={{ fontSize: '20px' }} />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                marginRight: '50px',
                justifyContent: 'space-around',
                width: '200px',
              }}
            >
              <div>
                <ShoppingCartOutlined />
                购物车
              </div>
              <div style={{ marginLeft: '20px' }}>
                <UserOutlined />
                个人中心
              </div>
            </div>
          </div>
          <div
            style={{
              height: '60px',
              backgroundColor: '#4C7DD2',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar src={logo} style={{ marginLeft: '30px', height: '55px' }} />
            <div
              style={{
                marginLeft: '200px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '50px',
              }}
            >
              <div style={{ cursor: 'pointer' }}>首页</div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Input placeholder="input search text" size="large" />
                <Button icon={<SearchOutlined />} style={{ height: '40px', marginLeft: '10px' }}>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Content className="site-layout" style={{ padding: '0 0', marginTop: 26, height: '100vh' }}>
        <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default BasicLayout;
