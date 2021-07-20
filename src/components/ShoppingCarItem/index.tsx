/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 10:05:27
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 14:16:53
 */
import React, { useEffect, useState } from 'react';
import { Button, Image, message } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { deleteShoppingCartById } from './service';

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
  time: number; //租期
  setValue: any;
  total: number;
  delete: any;
  deleteflag: boolean;
}
const ShoppingCarItem: React.FC<ShoppingCarItemProps> = (props) => {
  const [num, setNum] = useState(props.number);
  const NumberMinus = () => {
    if (num === 1) message.error('最小数量为1');
    else {
      setNum(num - 1);
      props.setValue(Number(props.total) - Number(props.price));
    }
  };
  const NumberPlus = () => {
    setNum(num + 1);
    props.setValue(Number(props.total) + Number(props.price));
  };
  const [time, setTime] = useState(props.time);
  const TimeMinus = () => {
    if (time === 1) message.error('最小数量为1');
    else {
      setTime(time - 1);
    }
  };
  const TimePlus = () => {
    setTime(time + 1);
  };
  const handleDelete = () => {
    deleteShoppingCartById(Number(props.id)).then((res) => {
      if (res.status / 100 === 2) {
        message.success('删除成功！');
        props.delete(!props.deleteflag);
      }
    });
  };
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
          alignItems: 'center',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Image src={props.src} style={{ width: '100px', height: '100px' }} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '200px' }}>{props.productName}</div>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>￥{props.price}</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'top',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Button
            shape="circle"
            icon={<MinusOutlined />}
            size="small"
            onClick={NumberMinus}
          ></Button>
          <div style={{ marginLeft: '20px', marginRight: '20px' }}>{num}</div>
          <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={NumberPlus}></Button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'top',
            flex: 1,
            marginLeft: 50,
          }}
        >
          <Button shape="circle" icon={<MinusOutlined />} size="small" onClick={TimeMinus}></Button>
          <div style={{ marginLeft: '20px', marginRight: '20px' }}>{time}</div>
          <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={TimePlus}></Button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          ￥{(Number(props.price) * num).toFixed(2)}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <div style={{ marginBottom: '10px', flex: 1, justifyContent: 'center' }}>
            <Button type="primary" danger onClick={handleDelete}>
              删除
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCarItem;
