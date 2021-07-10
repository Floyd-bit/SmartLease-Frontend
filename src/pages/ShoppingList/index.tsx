/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-08 20:52:14
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-10 14:30:17
 */
import React from 'react';
import SiderMenu from '../../components/SiderMenu';
import HistoryList from './HistoryList';
import { Row, Col, AutoComplete } from 'antd';
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
      <div style={{ float: 'left' }}>
        <SiderMenu selectedKey="10" />
      </div>
      <div
        style={{
          float: 'left',
          marginLeft: '100px',
          marginRight: 'auto',
          width: '1200px',
        }}
      >
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
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
        />
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
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
        />
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
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
        />
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
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
        />
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
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
        />
      </div>
    </>
  );
}

export default ShoppingList;
