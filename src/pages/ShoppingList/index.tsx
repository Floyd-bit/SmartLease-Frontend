/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-08 20:52:14
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-10 10:35:35
 */
import React from 'react';
import SiderMenu from '../../components/SiderMenu';
import HistoryList from './HistoryList';
import { Row, Col } from 'antd';
import ShoppingCard from '@/components/personalShoppingCard';
interface ShoppingCardProps {
  gmtCreate: string;
  id: string; //订单号
  receiver: string; //收货人，名字起得不好可以改
  phone: string;
  src: string; //图片地址
  productName: string;
  color?: string;
  size?: string;
  price: string;
  number: number; //商品数量
  payment: boolean; //是否支付
}
function ShoppingList() {
  return (
    <>
      <Row justify="space-around" align="top">
        <Col span={1}>
          <SiderMenu />
        </Col>  
        <Col>
        <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '200px',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          height: '50px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#C6DCF9',
          width: '100%',
        }}
      >
      </div>
      </div>
        <ShoppingCard 
      gmtCreate="2020/7/8"
      id="1123123123"
      receiver="syx"
      phone="12345678"
      number={1}
      productName="苹果 iPad mini3 MGY92CH苹果 iPad mini3 MGY92CH "
      color="红色"
      size="32G"
      price="99999.99"
      /> <ShoppingCard 
      gmtCreate="2020/7/8"
      id="1123123123"
      receiver="syx"
      phone="12345678"
      number={1}
      productName="苹果 iPad mini3 MGY92CH苹果 iPad mini3 MGY92CH "
      color="红色"
      size="32G"
      price="99999.99"
      />
        </Col> 
        
      </Row>
      
    </>
  );
}

export default ShoppingList;
