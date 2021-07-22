/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-16 10:20:27
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-22 15:44:22
 */
import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAddressById, getOrderById, getOrderItemById, getProductById } from './service';
import { Link, history } from 'umi';

function OrderItemCard(props:any){
  return(
    <div style={{width:'100%',display:'flex',marginTop:10,borderStyle:'none none solid',borderWidth:'1px',borderColor:'#DDDDDD',alignItems:'center'}}>
      <div style={{width:'30%',height:'150px'}}>
        <img style={{height:'130px',width:'130px',marginTop:10}} src={props.image}/>
      </div>
      <div style={{width:'40%'}}>
        {props.commodityName}<br/><br/>{props.selection}
      </div>
      <div style={{width:'30%'}}>
        押金：￥{Number(props.guaranteePrice).toFixed(2)} × {props.number}<br/>租金：￥{Number(props.price).toFixed(2)} × {props.number} × {props.time}天
      </div>
      <div style={{width:'30%'}}>
        合计：￥{Number(props.total).toFixed(2)}
      </div>
    </div>
  )
}

function OrderDetail(props:any){
  const [itemList, setItemList] = useState<any>([])
  const [orderInfo,setOrderInfo]=useState<any>({});
  const [address,setAddress]=useState<any>({receiverName:'',receiverPhone:'',address:''});
  useEffect(() => {
    getOrderById(props.location.query.id).then((res)=>{
      if(!res.data.value){
        message.info('订单不存在');
        history.push('/');
        setItemList([]);
      }else{
        setOrderInfo(res.data.value);
        getAddressById(res.data.value.receiverAddressId).then((res)=>{
          setAddress(res.data.value);
        })
        let shoppingList: any[] = [];
        let length = res.data.value.orderItemIds.length;
        res.data.value.orderItemIds.forEach((orderItemId:any)=>{
          getOrderItemById(orderItemId).then((res1)=>{
            getProductById(res1.data.value.commodityId).then((res)=>{
              if(res.data.value){
                let item = res.data.value;
                item.rentNum = res1.data.value.number;
                item.rentTime = res1.data.value.rentDays;
                item.selection= res1.data.value.uniform.selection;
                item.total=res1.data.value.transportPrice;
                shoppingList.push(item);
                if (shoppingList.length === length) {
                  setItemList(shoppingList);
                }
              }else{
                let item = {commodityName:'商品已下架',rentPrice:0,guaranteePrice:0,rentNum:res1.data.value.number,rentTime:res1.data.value.rentDays,selection:res1.data.value.uniform.selection,total:res1.data.value.transportPrice};
                shoppingList.push(item);
                if (shoppingList.length === length) {
                  setItemList(shoppingList);
                }
              }
            })
          })
        })
      }
    })
  }, [])

  const orderItems=itemList.map((item:any)=>{
    return(
      <OrderItemCard
      image={item.subImages}
      commodityName={item.commodityName}
      selection={item.selection}
      price={item.rentPrice}
      guaranteePrice={item.guaranteePrice}
      number={item.rentNum}
      time={item.rentTime}
      total={item.total}
      />
    )
  })

  return(
    <>
    <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
      <div style={{marginLeft:'25%'}}><span style={{color:'black',fontSize:20}}>订单详情</span></div>
      <div style={{marginLeft:'auto',marginRight:'25%'}}><Button onClick={()=>{history.go(-1)}}>返回</Button></div>
    </div>
    <div style={{width:'50%',margin:'auto'}}>
      {orderItems}
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
      <div style={{display:'flex',height:130,marginTop:30,borderStyle:'none none solid',borderWidth:'1px',borderColor:'#DDDDDD'}}>
        <div>
          <div style={{fontSize:18,fontWeight:'bold'}}>
            订单状态
          </div>
          <div style={{marginTop:30,fontWeight:'lighter'}}>
            {String(orderInfo.status).replace('UNPAY','待付款').replace('UNSEND','待发货').replace('UNRECEIVE','待收货').replace('USING','使用中').replace('不知道','HAVEBUY').replace('未退还','UNCREDIT').replace('已退还','AFTERSALE')}
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
