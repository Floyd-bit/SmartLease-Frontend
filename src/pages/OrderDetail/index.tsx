/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-16 10:20:27
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 03:37:07
 */
import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAddressById, getOrderById } from './service';

function OrderItemCard(props:any){
  return(
    <div style={{width:'100%',display:'flex',marginTop:10,borderStyle:'none none solid',borderWidth:'1px',borderColor:'#DDDDDD',alignItems:'center'}}>
      <div style={{width:'30%',height:'150px'}}>
        <img style={{height:'130px',width:'130px',marginTop:10}} src='https://img.alicdn.com/bao/uploaded/i4/2399845384/O1CN01iiRkcM1pdv6os9HAM_!!0-item_pic.jpg_200x200q90.jpg'/>
      </div>
      <div style={{width:'40%'}}>
        孙少快乐椅
      </div>
      <div style={{width:'30%'}}>
        ￥1899×3
      </div>
    </div>
  )
}



function OrderDetail(props:any){
  const [orderInfo,setOrderInfo]=useState<any>({});
  const [address,setAddress]=useState<any>({receiverName:'',receiverPhone:'',address:''});
  useEffect(() => {
    getOrderById(props.location.query.id).then((res)=>{
      setOrderInfo(res.data.value);
      getAddressById(res.data.value.receiverAddressId).then((res)=>{
        setAddress(res.data.value);
      })
    })
  }, [])
  return(
    <>
    <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
      <div style={{marginLeft:'25%'}}><span style={{color:'black',fontSize:20}}>订单详情</span></div>
    </div>
    <div style={{width:'50%',margin:'auto'}}>
      <OrderItemCard/>
      <OrderItemCard/>
      <div style={{display:'flex',height:130,marginTop:30,borderStyle:'none none solid',borderWidth:'1px',borderColor:'#DDDDDD'}}>
        <div>
          <div style={{fontSize:18,fontWeight:'bold'}}>
            收货信息
          </div>
          <div style={{marginTop:30,fontWeight:'lighter'}}>
            {address.receiverName}　{address.receiverPhone}<br/>
            {address.address}
          </div>
        </div>
        <div style={{marginLeft:'auto',marginRight:0}}>
        </div>
      </div>
      <div style={{display:'flex',height:130,marginTop:30,borderStyle:'none none solid',borderWidth:'1px',borderColor:'#DDDDDD'}}>
        <div>
          <div style={{fontSize:18,fontWeight:'bold'}}>
            支付方式
          </div>
          <div style={{marginTop:30,fontWeight:'lighter'}}>
            支付方式：在线支付
          </div>
        </div>
      </div>
      <div style={{display:'flex',marginTop:20}}>
        <div style={{marginRight:0,marginLeft:'auto'}}>
          <span>应付金额: </span><span style={{fontSize:30,fontWeight:'bold',color:'#0099FF'}}>{Number(orderInfo.transportPrice).toFixed(2)}</span><span> 元</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderDetail;
