/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-15 11:02:29
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 16:38:45
 */
import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import qrcode from '../../assets/payqrcode.png'
import { getOrderById } from './service';

function Payment(props:any){
  const [orderInfo, setOrderInfo] = useState<any>({})
  useEffect(() => {
    getOrderById(props.location.query.id).then((res)=>{
      if(res.data.value){
        setOrderInfo(res.data.value)
      }
    })
  }, [])
  const confirmPayment=()=>{
    getOrderById(props.location.query.id).then((res)=>{
      if(res.data.value&&res.data.value.status!='UNPAY'){
        message.success('支付成功！即将跳转到我的订单...',2).then(()=>window.location.href='/user/orderlist')
      }else{
        message.success('暂未检测到支付成功，如有问题请联系孙逸翔')
      }
    })

  }

  return(
    <div style={{width:'50%',margin:'auto'}}>
      <div style={{height:50,background:'white',marginTop:20,display:'flex',justifyContent:'center',alignItems:'center',fontSize:20,border:'1px solid #DDDDDD'}}>
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2795" width="50" height="50"><path d="M395.846 603.585c-3.921 1.98-7.936 2.925-12.81 2.925-10.9 0-19.791-5.85-24.764-14.625l-2.006-3.864-78.106-167.913c-0.956-1.98-0.956-3.865-0.956-5.845 0-7.83 5.928-13.68 13.863-13.68 2.965 0 5.928 0.944 8.893 2.924l91.965 64.43c6.884 3.864 14.82 6.79 23.708 6.79 4.972 0 9.85-0.945 14.822-2.926L861.71 282.479c-77.149-89.804-204.684-148.384-349.135-148.384-235.371 0-427.242 157.158-427.242 351.294 0 105.368 57.361 201.017 147.323 265.447 6.88 4.905 11.852 13.68 11.852 22.45 0 2.925-0.957 5.85-2.006 8.775-6.881 26.318-18.831 69.334-18.831 71.223-0.958 2.92-2.013 6.79-2.013 10.75 0 7.83 5.929 13.68 13.865 13.68 2.963 0 5.928-0.944 7.935-2.925l92.922-53.674c6.885-3.87 14.82-6.794 22.756-6.794 3.916 0 8.889 0.944 12.81 1.98 43.496 12.644 91.012 19.53 139.48 19.53 235.372 0 427.24-157.158 427.24-351.294 0-58.58-17.78-114.143-48.467-163.003l-491.39 280.07-2.963 1.98z" fill="#09BB07" p-id="2796"></path></svg>
        微信支付
      </div>
      <div style={{height:500,background:'#DDDDDD',marginTop:5,border:'1px',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <span style={{fontSize:30,marginTop:10,marginBottom:10}}>￥{Number(orderInfo.transportPrice).toFixed(2)}</span>
        <img src={qrcode}/>
        <span style={{width:200,textAlignLast:'justify',fontSize:15,fontWeight:'bold',marginTop:10}}>订单号：{orderInfo.id}</span>
        <span style={{width:200,textAlignLast:'justify',fontSize:15,fontWeight:'bold',marginBottom:10}}>请扫码支付，并点击确认按钮</span>
        <Button onClick={confirmPayment}>确认</Button>
      </div>
    </div>
  )
}

export default Payment;
