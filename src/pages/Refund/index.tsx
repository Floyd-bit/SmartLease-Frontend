/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:22:13
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 15:24:24
 */
import SiderMenu from "@/components/SiderMenu";
import { Row, Col, Button, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { getRefundList } from "./service";

function RefundItem(props: { title: string, price: string, id:number }){
  return(
    <>
    <div style={{height: '100px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',width: '100%',}}>
      <div style={{width:'40%',textAlign:'center'}}>
        <a href={'/detail?id='+props.id}>
        <span style={{color:'black'}}>{props.title}</span>
        </a>
      </div>
      <div style={{width:'15%',textAlign:'center'}}>
        <span>￥{props.price}</span>
      </div>
      <div style={{width:'15%',textAlign:'center'}}>
        <span>2020-08-25 10:12:19</span>
      </div>
      <div style={{width:'15%',textAlign:'center',color:'red'}}>
        <span>未退还</span>
      </div>
      <div style={{width:'15%',textAlign:'center',color:'red'}}>
        <span>处理中</span>
      </div>
    </div>
    <Divider/>
    </>
  )
}

function Refund(props:any){
  const[refundList,setRefundList]=useState<Array<{title:string,price:string,id:number}>>([]);
  useEffect(() => {
    getRefundList().then((res)=>setRefundList(res.data));
  }, [])

  const refunds=refundList.map((refund)=>{
    return(
      <RefundItem title={refund.title} price={refund.price} id={refund.id}/>
    )
  })
  return(
    <Row justify="space-around" align="top">
      <Col span={2}>
        <SiderMenu selectedKey="12" />
      </Col>
      <Col span={20} offset={2}>
        <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
          <div style={{width:'40%',textAlign:'center'}}>
            <span>商品</span>
          </div>
          <div style={{width:'15%',textAlign:'center'}}>
            <span>退款金额</span>
          </div>
          <div style={{width:'15%',textAlign:'center'}}>
            <span>申请时间</span>
          </div>
          <div style={{width:'15%',textAlign:'center'}}>
            <span>退款状态</span>
          </div>
          <div style={{width:'15%',textAlign:'center'}}>
            <span>交易操作</span>
          </div>
        </div>
        {refunds}
      </Col>
    </Row>
  )
}

export default Refund;
