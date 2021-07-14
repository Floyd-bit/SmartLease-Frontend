/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-09 11:40:35
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 11:48:42
 */
import React, { useState } from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb, Input, Avatar, Button, Row, Col } from 'antd';
import {
  HomeFilled,
  HomeOutlined,
  LeftCircleTwoTone,
  RightCircleTwoTone,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from '@/assets/logo.png';
import { Link } from 'umi';

const { Header, Content, Footer } = Layout;

const BasicLayout: React.FC = props => {
  const [keyword,setKeyword]=useState('');
  return (
    <Layout style={{background:'white'}}>
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
                marginLeft: '10px',
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
                width: '300px',
              }}
            >
              <div>
                <HomeOutlined />
                <Link to="/" style={{ color: 'black',marginLeft:'5px' }}>
                  首页
                </Link>
              </div>
              <div>
              <ShoppingCartOutlined />
              <Link to="/user/shoppingcar" style={{color:'black',marginLeft:'5px'}}>
                购物车
              </Link>
              </div>
              <div>
                <UserOutlined />
                <Link to="/user" style={{ color: 'black',marginLeft:'5px' }}>
                  个人中心
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              height: '60px',
              width: '100%',
              backgroundColor: '#4C7DD2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div><Avatar src={logo} style={{ marginLeft: '30px', height: '55px' }} /></div>
            <div
              style={{
                marginLeft: '200px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '400px',
                paddingLeft: '50px',
                paddingRight: '50px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Input placeholder="输入租品名称" size="large" onChange={(e)=>setKeyword(e.target.value)}/>
                <Link to={"/search?keyword="+keyword} style={{ color: 'black'}} onClick={(e)=>{if(keyword==='') e.preventDefault()}}>
                  <Button icon={<SearchOutlined />} style={{ height: '40px', marginLeft: '10px' }}>
                    搜索
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Content className="site-layout" style={{ padding: '0 0', marginTop: 26, }}>
        <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ background:'white',textAlign: 'center' }}>@CopyRight 你说的都对</Footer>
    </Layout>
  );
};

export default BasicLayout;
