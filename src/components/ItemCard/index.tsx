/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-09 09:47:25
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-20 10:03:08
 */
import React from 'react';

interface ItemCardProps {
  image: string;//图片链接
  title: string; //商品名称
  price: string;//租金
  guaranteePrice: string;//保证金
  id: number; //商品id
  length: number//边长
}

function ItemCard(props:ItemCardProps) {
  let itemLink='/detail?id='+props.id;
  return (
    <div style={{width:props.length,height:props.length*1.2}}>
    <div style={{ width: '90%',margin:'0 auto',height:'75%'}}>
        <a href={itemLink}>
          <img src={props.image} style={{width:'100%',height:'100%'}}/>
          <h4 style={{marginBottom:0,textAlign:'center',overflow: 'hidden',textOverflow:'ellipsis',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical'}}>{props.title}</h4>
        </a>
        <p style={{ height: '25%',textAlign:'center'}}>
          <span style={{color:'red'}}>￥{props.price}/天</span>
          <span style={{float:'right',/* textDecoration:'line-through' */}}>￥{props.guaranteePrice}</span>
        </p>
    </div>
    </div>
  )
}

export default ItemCard;
