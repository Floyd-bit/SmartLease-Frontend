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
const ShoppingCard: React.FC<ShoppingCardProps> = props => {
  const [payInfo, setPayInfo] = useState<boolean>(false);
  return <div style={{ backgroundColor: 'red', height: '100px', width: '200px' }}></div>;
};

export default ShoppingCard;
