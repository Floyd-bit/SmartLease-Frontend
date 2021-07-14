/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:22:13
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 13:19:22
 */
import SiderMenu from "@/components/SiderMenu";
import { Row, Col, Button, Divider, message } from "antd";
import React, { useEffect, useState } from "react";
import { deleteHistory, getHistoryList } from "./service";

function HistoryItem(props: { title: string, price: string, onClick: any, id:number }){
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

function History(props:any){
  const[historyList,setHistoryList]=useState<Array<{title:string,price:string,id:number}>>([]);
  useEffect(() => {
    getHistoryList().then((res)=>setHistoryList(res.data));
  }, [])
  const deleteHandle=(id:number)=>{
    message.loading({ content: 'Loading...', key:id, duration:0});
    deleteHistory().then((res)=>{
      if(res.message==='success'){
        console.log('删除历史'+id);
        getHistoryList().then((res)=>setHistoryList(res.data));
        message.success({ content: '删除成功', key:id ,duration:1});
      }
      else{
        message.info({ content: '删除失败', key:id ,duration:1});
      }
    })
  }

  const historylist=historyList.map((history)=>{
    return(
      <HistoryItem title={history.title} price={history.price} onClick={()=>deleteHandle(history.id)} id={history.id}/>
    )
  })
  return(
    <Row justify="space-around" align="top">
      <Col span={2}>
        <SiderMenu selectedKey="10" />
      </Col>
      <Col span={20} offset={2}>
        <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
          <div style={{width:'20%',textAlign:'center'}}>
            <span>商品</span>
          </div>
          <div style={{width:'60%',textAlign:'center'}}>
            <span>价格</span>
          </div>
          <div style={{width:'20%',textAlign:'center'}}>
            <span>操作</span>
          </div>
        </div>
        {historylist}
      </Col>
    </Row>
  )
}

export default History;
