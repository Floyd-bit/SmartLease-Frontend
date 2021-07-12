/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 10:05:27
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-10 10:56:54
 */
import React, { useState } from 'react';
import { Button, Image } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

interface ShoppingCarItemProps {
  gmtCreate: string;
  id: string; //订单号
  receiver: string; //收货人，名字起得不好可以改
  phone: string;
  src: string; //图片地址
  name: string; // 商品名称
  productName: string;
  color?: string;
  size?: string;
  count: number; // 小计
  price: string; //价格
  number: number; //商品数量
  payment: boolean; //是否支付
}

const ShoppingCarItem: React.FC<ShoppingCarItemProps> = props => {
  return (
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
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '16%',
          }}
        >
          <Image src={props.src} style={{ width: '100px', height: '100px' }} />
        </div>
        <div
          style={{
            display: 'flex',
            width: '16%',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '200px' }}>{props.productName}</div>
          <div>{props.name}</div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '16%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>￥{props.price}</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'top',
            justifyContent: 'space-between',
            width: '16%',
          }}
        >
          <Button shape="circle" icon={<MinusOutlined />} size="small"></Button>
          <div>{props.number}</div>
          <Button shape="circle" icon={<PlusOutlined />} size="small"></Button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '16%',
          }}
        >
          ￥{props.count}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '16%',
          }}
        >
          <div style={{ marginBottom: '10px', width: '16%' }}>
            <Button type="primary" danger>
              删除
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCarItem;
