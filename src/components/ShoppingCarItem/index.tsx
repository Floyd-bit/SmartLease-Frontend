/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 10:05:27
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-21 16:22:36
 */
import React, { useEffect, useState } from 'react';
import { Button, Image, message } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { deleteShoppingCartById } from './service';

interface ShoppingCarItemProps {
  id: string; //购物车项id
  src: string; //图片地址
  productName: string;//商品名
  price: string; //价格
  guaranteePrice: string;//押金
  number: number; //商品数量
  time: number; //租期
  total: number;//父组件总价
  setValue: any;//修改父组件总价
  delete: any;//改变父组件的deleteflag以重新渲染
  deleteflag: boolean;//父组件的deleteflag
  selection: string;//规格
}
const ShoppingCarItem: React.FC<ShoppingCarItemProps> = (props) => {
  const [num, setNum] = useState(props.number);
  //修改数量
  const NumberMinus = () => {
    if (num === 1) message.error('最小数量为1');
    else {
      setNum(num - 1);
      props.setValue(Number(props.total) - Number(props.price)*time - Number(props.guaranteePrice));
    }
  };
  const NumberPlus = () => {
    setNum(num + 1);
    props.setValue(Number(props.total) + Number(props.price)*time + Number(props.guaranteePrice));
  };
  //修改租期
  const [time, setTime] = useState(props.time);
  const TimeMinus = () => {
    if (time === 1) message.error('最小数量为1');
    else {
      setTime(time - 1);
      props.setValue(Number(props.total) - Number(props.price)*num);
    }
  };
  const TimePlus = () => {
    setTime(time + 1);
    props.setValue(Number(props.total) + Number(props.price)*num);
  };
  //删除
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
          <div style={{ width: '200px' }}>{props.productName}<br/>{props.selection}</div>
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
          <div>￥{props.price}/天+押金￥{props.guaranteePrice}</div>
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
          ￥{(Number(props.guaranteePrice) * num+Number(props.price) * num*time).toFixed(2)}
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
