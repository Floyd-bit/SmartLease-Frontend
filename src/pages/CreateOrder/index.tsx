/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-15 16:30:11
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 19:34:44
 */
import { Button, message, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { CreateOrderApi, deleteShoppingCart, getDefaultAddress, getProductById, getShoppingCart } from './service';
import { Link, history } from 'umi';
import GetUserId from '@/utils/GetUserId';

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
        合计：￥{Number(props.guaranteePrice*props.number+props.price*props.number*props.time).toFixed(2)}
      </div>
    </div>
  )
}

function CreateOrder(props:any){
  const [loading,setLoading]=useState(false)
  const [itemList, setItemList] = useState<any>([])
  const [total, setTotal] = useState<number>(0);
  const [address,setAddress]=useState<any>({});
  //获取默认收货地址
  useEffect(() => {
    getDefaultAddress().then((res)=>{
      setAddress(res.data.value)
    }).catch((err)=>{if(err.response){message.warning('请先设置默认收货地址');history.push('/user/address')}})
  }, [])
  //获取订单项
  useEffect(() => {
    setLoading(true);
    if(window.location.search===""){
      let data = {
        pageNum: 1,
        pageSize: 1000,
      };
      getShoppingCart(data).then((res) => {
        if (res.data.value.records.length === 0) {
          message.info('参数错误');
          history.push('/');
          setItemList([]);
        } else {
          let shoppingList: any[] = [];
          let length = res.data.value.records.length;
          res.data.value.records.forEach((items: any) => {
            getProductById(items.commodityIds["100"]).then((res) => {
              if(res.data.value){
                let item = res.data.value;
                item.rentNum = items.commodityIds["200"];
                item.rentTime = items.commodityIds["300"];
                let options=JSON.parse(res.data.value.attribute.options);
                item.selection=(items.commodityIds["400"]===-1?"":options[0].title+":"+options[0].values[items.commodityIds["400"]]+" ")+(items.commodityIds["500"]===-1?"":options[1].title+":"+options[1].values[items.commodityIds["500"]]);
                shoppingList.push(item);
                if (shoppingList.length === length) {
                  setItemList(shoppingList);
                  let total = 0;
                  shoppingList.forEach((item) => {
                    total =
                      total + Number((Number(item.guaranteePrice)*Number(item.rentNum) + Number(item.rentPrice)*Number(item.rentNum)*Number(item.rentTime)).toFixed(2));
                  });
                  setTotal(total);
                  setLoading(false);
                }
              }else{
                length=length-1;
                if (shoppingList.length === length) {
                  setItemList(shoppingList);
                  let total = 0;
                  shoppingList.forEach((item) => {
                    total =
                      total + Number((Number(item.guaranteePrice)*Number(item.rentNum) + Number(item.rentPrice)*Number(item.rentNum)*Number(item.rentTime)).toFixed(2));
                  });
                  setTotal(total);
                  setLoading(false);
                }
              }
            })
          })
        }
      })
    }else{
      let items={
        commodityIds:{
          100:props.location.query.id,
          200:props.location.query.num,
          300:props.location.query.time,
          400:props.location.query.s1,
          500:props.location.query.s2
        }
      }
      let shoppingList: any[] = [];
      getProductById(items.commodityIds["100"]).then((res) => {
        if(res.data.value){
          let item = res.data.value;
          item.rentNum = items.commodityIds["200"];
          item.rentTime = items.commodityIds["300"];
          let options=JSON.parse(res.data.value.attribute.options);
          item.selection=(items.commodityIds["400"]==-1?"":options[0].title+":"+options[0].values[items.commodityIds["400"]]+" ")+(items.commodityIds["500"]==-1?"":options[1].title+":"+options[1].values[items.commodityIds["500"]]);
          shoppingList.push(item);
          setItemList(shoppingList);
          setTotal(Number((Number(item.guaranteePrice)*Number(item.rentNum) + Number(item.rentPrice)*Number(item.rentNum)*Number(item.rentTime)).toFixed(2)));
          setLoading(false);
        }else{
          message.info('商品不存在');
          history.push('/');
          setItemList([]);
        }
      })
    }
  }, [])

  //提交订单的函数
  const handleCreateOrder=()=>{
    let orderItemCreateVos: any[] = [];
    itemList.forEach((item:any)=>{
      let orderItemCreateVo:any={};
      orderItemCreateVo.commodityId=item.id;
      orderItemCreateVo.discount=0;
      orderItemCreateVo.number=item.rentNum;
      orderItemCreateVo.rentDays=item.rentTime;
      orderItemCreateVo.storeId=item.storeId;
      //transportPrice定为总价
      orderItemCreateVo.transportPrice=Number((Number(item.guaranteePrice)*Number(item.rentNum) + Number(item.rentPrice)*Number(item.rentNum)*Number(item.rentTime)).toFixed(2));
      orderItemCreateVo.uniform={selection:item.selection};
      orderItemCreateVos.push(orderItemCreateVo);
    })
    let data={
      orderItemCreateVos:orderItemCreateVos,
      receiverAddressId:address.id,
      transportPrice:total,
      userId:GetUserId(),
    }
    CreateOrderApi(data).then((res)=>{if(res.message==='创建成功'){message.success('提交订单成功');deleteShoppingCart();history.push('/user/orderlist')}})
  }
  //渲染页面的订单项
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
      total={total}
      />
    )
  })

  return(
    <>
    <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
      <div style={{marginLeft:'25%'}}><span style={{color:'black',fontSize:20}}>填写并核对订单信息</span></div>
      <div style={{marginLeft:'auto',marginRight:'25%'}}><Button onClick={handleCreateOrder}>提交订单</Button></div>
    </div>
    <div style={{width:'50%',margin:'auto'}}>
      <Skeleton active loading={loading}>
      {orderItems}
      </Skeleton>
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
          <Button>修改地址</Button>
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
          <span>应付金额: </span><span style={{fontSize:30,fontWeight:'bold',color:'#0099FF'}}>{total.toFixed(2)}</span><span> 元</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateOrder;
