/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:22:13
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 11:57:55
 */
import SiderMenu from "@/components/SiderMenu";
import { Row, Col, Button, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { deleteFavorite, getFavoriteList } from "./service";

function RefundItem(props: { title: string, price: string, onClick: any, id:number }){
  return(
    <>
    <div style={{height: '100px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',width: '100%',}}>
      <div style={{width:'20%',textAlign:'center'}}>
        <a href={'/detail?id='+props.id}>
        <span style={{color:'black'}}>{props.title}</span>
        </a>
      </div>
      <div style={{width:'60%',textAlign:'center'}}>
        <span>{props.price}</span>
      </div>
      <div style={{width:'20%',textAlign:'center'}}>
        <span onClick={props.onClick}>删除</span>
      </div>
    </div>
    <Divider/>
    </>
  )
}

function Refund(props:any){
  const[favoriteList,setFavoriteList]=useState<Array<{title:string,price:string,id:number}>>([]);
  useEffect(() => {
    getFavoriteList().then((res)=>setFavoriteList(res.data));
  }, [])
  const deleteHandle=(id:number)=>{
    deleteFavorite().then((res)=>{
      if(res.message==='success'){
        console.log('删除收藏'+id);
        getFavoriteList().then((res)=>setFavoriteList(res.data));
      }
    })
  }

  const favorites=favoriteList.map((favorite)=>{
    return(
      <RefundItem title={favorite.title} price={favorite.price} onClick={()=>deleteHandle(favorite.id)} id={favorite.id}/>
    )
  })
  return(
    <Row justify="space-around" align="top">
      <Col span={2}>
        <SiderMenu selectedKey="12" />
      </Col>
      <Col span={20} offset={2}>
        <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
          <div style={{width:'30%',textAlign:'center'}}>
            <span>商品</span>
          </div>
          <div style={{width:'20%',textAlign:'center'}}>
            <span>退款金额</span>
          </div>
          <div style={{width:'30%',textAlign:'center'}}>
            <span>申请时间</span>
          </div>
          <div style={{width:'10%',textAlign:'center'}}>
            <span>退款状态</span>
          </div>
          <div style={{width:'10%',textAlign:'center'}}>
            <span>交易操作</span>
          </div>
        </div>
        {favorites}
      </Col>
    </Row>
  )
}

export default Refund;
