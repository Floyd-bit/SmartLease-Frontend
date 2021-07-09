import { Button,Image } from 'antd';
import React, { useState } from 'react';
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
const personalShoppingCard: React.FC<ShoppingCardProps> = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1000px',
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
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
          <div>{props.gmtCreate}</div>
          <div>订单号： {props.id}</div>
          <div>收货人: {props.receiver}</div>
          <div>收货人手机: {props.phone}</div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <div
            style={{
              backgroundColor: 'gray',
              width: '100px',
              height: '100px',
              marginTop: '25px',
              marginLeft: '40px',
            }}
          >
            <Image src={props.src}/>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '30px',
            marginLeft: '30px',
          }}
        >
          <div style={{ width: '200px' }}>{props.productName}</div>
          <div>
            颜色: {props.color}&nbsp;&nbsp;&nbsp;规格: {props.size}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '35px',
            marginLeft: '20px',
            alignItems: 'center',
          }}
        >
          <div>{props.price}</div>
          <div>x{props.number}</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '25px',
            marginLeft: '50px',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '25px', color: 'red' }}>{props.price}</div>
          <div>已优惠100000.00</div>
          <div>(含运费99.99)</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '35px',
            marginLeft: '50px',
            alignItems: 'center',
          }}
        >
          {props.payment ? <div style={{ color: 'red' }}>待付款</div> : <div>待收货</div>}
          <div>订单详情</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '25px',
            marginLeft: '50px',
            alignItems: 'center',
          }}
        >
          <div style={{ color: 'red',marginBottom:'10px' }}>29分59秒</div>
          <div style={{marginBottom:'10px'}}>

            <Button type="primary" danger>
              立即付款
            </Button>
          </div>
          <div>取消订单</div>
        </div>
      </div>
    </div>
  );
};

export default personalShoppingCard;
