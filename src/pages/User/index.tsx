/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 11:23:22
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 17:12:09
 */
import React from 'react';
import SiderMenu from '@/components/SiderMenu';
import { Row, Col, Card, Avatar, Button } from 'antd';
import { CarOutlined, CiCircleOutlined, CreditCardOutlined, HistoryOutlined, OneToOneOutlined, RotateLeftOutlined, SearchOutlined, TransactionOutlined, UserOutlined } from '@ant-design/icons';
import ShoppingCarItem from '@/components/ShoppingCarItem';
import ItemCard from '@/components/ItemCard';
import GetUserId from '@/components/GetUserId';

const gridStyle = {
  width: '16.66666%',
  textAlign: 'center',
};


function User() {
  return (
    <Row justify="space-around" align="top">
      <Col span={5}>
        <SiderMenu selectedKey="sub1" />
      </Col>
      <Col span={15} style={{ marginTop: '30px' , width: 900}}>
        <Card>
          <Card.Grid style={gridStyle}>
            <div>
            <Button type="primary" shape="circle" icon={<TransactionOutlined />} />
            </div>
            <div>
            待付款
            </div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
          <div>
            <Button type="primary" shape="circle" icon={<CreditCardOutlined />} />
            </div>
            <div>
            待发货
            </div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
          <div>
            <Button type="primary" shape="circle" icon={<CarOutlined />} />
            </div>
            <div>
            待收货
            </div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
          <div>
            <Button type="primary" shape="circle" icon={<OneToOneOutlined />} />
            </div>
            <div>
            使用中
            </div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
          <div>
            <Button type="primary" shape="circle" icon={<TransactionOutlined />} />
            </div>
            <div>
            已退还
            </div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
          <div>
            <Button type="primary" shape="circle" icon={<RotateLeftOutlined />} />
            </div>
            <div>
            退款/售后
            </div>
          </Card.Grid>
         </Card>
        <Card
          title="我的订单"
          style={{ width: 900, marginTop: 20 }}
          extra={<a href="#">全部订单</a>}
        >
          <ShoppingCarItem
            gmtCreate="2020/7/8"
            id="1123123123"
            receiver="syx"
            phone="12345678"
            number={1}
            productName="苹果 iPad mini3 MGY92CH苹果 iPad mini3 MGY92CH "
            color="红色"
            size="32G"
            price="99999.99"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
            name="商品"
            count={2}
            payment={true}
            time={1} />
          <ShoppingCarItem
            gmtCreate="2020/7/8"
            id="1123123123"
            receiver="syx"
            phone="12345678"
            number={1}
            productName="苹果 iPad mini3 MGY92CH苹果 iPad mini3 MGY92CH "
            color="红色"
            size="32G"
            price="99999.99"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
            name="商品"
            count={2}
            payment={true}
            time={1} />
        </Card>
        <Card
          title="根据浏览，猜你喜欢"
          style={{ width: 900, marginTop: 20 }}
          extra={<Button>换一组</Button>}
        >
          <Row gutter={[24, 16]}>
            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i4/15380848/O1CN01cKtKXt1I8QYSSnARW_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>
            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i2/110854353/O1CN017A07qO1i1ilSiwSuG_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>
            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i3/16185481/O1CN01CTDpok1qMLWfeCyIB_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>

            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>
            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i2/110854353/O1CN017A07qO1i1ilSiwSuG_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>
            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i2/130148900/O1CN01ndeQop2FcFaMNvTKP_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>

            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i3/133451333/O1CN01f15o3t1LiYalhaT35_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>
            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i2/124643983/O1CN01j4JOoe1fIGDNAVs1a_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>
            <Col span={8}>
              <ItemCard
              image='https://img.alicdn.com/imgextra/i1/31799034/O1CN01iUvvAF2GbcjnYsmCE_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
              title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={4}>
        <div>
          <Card>
            <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column' }}>
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                style={{background:'#1890ff'}}
                icon={<UserOutlined/>}
              />
              <h2>Hi! 下午好</h2>
            </div>
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', }}>
              您是我们的第{GetUserId()}位用户
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default User;
