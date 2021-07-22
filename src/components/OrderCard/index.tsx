/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-08 21:11:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-22 16:12:35
 */
import { getProductById } from '@/pages/CreateOrder/service';
import GetUserId from '@/utils/GetUserId';
import { Button,Image,Input,message,Modal, Rate} from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import { deleteOrderById, getAddressById, getOrderItemById } from './service';

const { TextArea } = Input;
interface OrderCardProps {
  gmtCreate: string;//创建时间
  id: string; //订单号
  receiverAddressId:number;//收货地址id
  transportPrice:number;//订单总价
  status:string;//订单状态
  orderItemIds:Array<number>;
  refresh:any;//刷新父组件
}

function OrderItemCard(props:any){
  const[value,setValue]=useState<any>({})
  useEffect(() => {
    getProductById(props.id).then((res)=>{
      if(res.data.value){
        setValue(res.data.value);
      }else{
        setValue({commodityName:'商品已下架'})
      }
    })
  }, [])
  return(
    <div style={{width:'100%',display:'flex',borderStyle:'none none solid',borderWidth:'1px',borderColor:'#DDDDDD',alignItems:'center'}}>
      <div style={{width:'30%',height:'150px',display:'flex',justifyContent:'center'}}>
        <img style={{height:'130px',width:'130px',marginTop:10}} src={value.subImages}/>
      </div>
      <div style={{width:'40%',display:'flex'}}>
        <Link to={'/detail?id='+props.id} style={{color:'black'}}>{value.commodityName}<br/><br/>{props.selection}</Link>
      </div>
      <div style={{width:'30%',display:'flex',justifyContent:'flex-end',textAlign:'right'}}>
        押金：￥{Number(value.guaranteePrice).toFixed(2)}<br/>租金：￥{Number(value.rentPrice).toFixed(2)}/天<br/><br/>{props.time}天×{props.number}
      </div>
    </div>
  )
}

const OrderCard: React.FC<OrderCardProps> = props => {
  //获取收货地址
  const[address,setAddress]=useState({receiverName:'',receiverPhone:''})
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCommodity, setCurrentCommodity] = useState({commodityId:0,commodityName:''});
  const [comments,setComments] = useState('');
  const [score,setScore] = useState(0);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const changeComments = (value: any) => {
    console.log(value.target.defaultValue);
    setComments(value.target.defaultValue);
  }

  const handleOk = () => {
    axios.post(`/api2/customer/evaluation/create`,{
      commodityId: currentCommodity.commodityId,
      commodityName: currentCommodity.commodityName,
      content: comments,
      score: score,
      userId: GetUserId(),
      time: new Date(),
    }
    )
    .then((res) => {
      message.success(res.data.message);
    })
    .catch()
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    getAddressById(props.receiverAddressId).then((res)=>setAddress(res.data.value));
  }, [])
  //获取订单项详情
  const [orderItemList,SetOrderItemList]=useState<any>([]);
  useEffect(() => {
    let orderItems:Array<any>=[]
    props.orderItemIds.forEach((orderItemId)=>{
      getOrderItemById(orderItemId).then((res)=>{
        orderItems.push(res.data.value);
        if(orderItems.length===props.orderItemIds.length){
          SetOrderItemList(orderItems)
        }
      })
    })
  }, [])
  //订单项
  const orderItemCards=orderItemList.map((orderItem:any)=>{
    return(
      <OrderItemCard id={orderItem.commodityId} number={orderItem.number} time={orderItem.rentDays} selection={orderItem.uniform.selection}/>
    )
  })
  //删除
  const handleDelete=()=>{
    deleteOrderById(props.id);
    props.refresh();
  }

  return (
    <>
    <div style={{ width: '100%', height: 'auto', justifyContent: 'center', marginTop: '0px', }}>
      <div style={{ height: '50px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#C6DCF9', width: '100%', }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
          <div>{props.gmtCreate.substr(0,19).replace("T"," ")}</div>
          <div>订单号：{props.id}</div>
          <div>收货人: {address.receiverName}</div>
          <div>收货人手机: {address.receiverPhone}</div>
        </div>
      </div>
      <div style={{display:'flex'}}>
        <div style={{width:'60%'}}>
          {orderItemCards}
        </div>
        <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
          <div>
            总价：￥{props.transportPrice.toFixed(2)}<br/><span style={{color:'red',fontSize:16 }}>
              {props.status.replace('UNPAY','待付款').replace('UNSEND','待发货').replace('UNRECEIVE','待收货').replace('USING','使用中').replace('HAVEBUY','不知道').replace('UNCREDIT','未退还').replace('AFTERSALE','已退还')}
            </span><br/><Link to={'/orderdetail?id='+props.id}>订单详情</Link>
          </div>
        </div>
        <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div>
            <div style={{marginBottom:10}}>
              <Link to={'/payment?id='+props.id}>
                <Button type="primary" style={{display:props.status=='UNPAY'?'':'none'}}>立即付款</Button>
              </Link>
              <Button type="primary" style={{display:props.status=='AFTERSALE'?'':'none'}} onClick={()=>{setCurrentCommodity({"commodityId":2137,"commodityName":"1"}); showModal();}}>立即评价</Button>
            </div>
            <div style={{textAlign:'center'}}>
              <Button type="primary" disabled={props.status!='UNPAY'&&props.status!='AFTERSALE'} danger onClick={handleDelete}>删除订单</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal title="评价" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Rate/>
      <Input onChange={(value) => setScore(Number(value.target.defaultValue))}/>
      <TextArea rows={4} onChange={changeComments} placeholder="请输入评价内容"/> 
    </Modal>
    </>
  );
};

export default OrderCard;
