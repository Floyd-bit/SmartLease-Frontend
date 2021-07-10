import React from 'react';

interface ItemCardProps {
  image: string;//图片链接
  title: string; //商品名称
  price: string;
  oldprice: string;
  id: string; //商品id
}

function ItemCard(props:ItemCardProps) {
  let itemLink='https://www.baidu.com/s?wd='+props.id;
  return (
    <div style={{ width: '90%',margin:'0 auto',height:'80%'}}>
        <a href={itemLink}>
          <img src={props.image} style={{width:'100%',height:'100%'}}/>
          <h4 style={{marginBottom:0,textAlign:'center',overflow: 'hidden',textOverflow:'ellipsis',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical'}}>{props.title}</h4>
        </a>
        <p style={{ height: '22px',textAlign:'center'}}>
          <span style={{color:'red'}}>￥{props.price}</span>
          <span style={{float:'right',textDecoration:'line-through'}}>￥{props.oldprice}</span>
        </p>
    </div>
  )
}

export default ItemCard;
