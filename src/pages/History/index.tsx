/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:22:13
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-21 10:39:18
 */
import SiderMenu from "@/components/SiderMenu";
import { Row, Col, Button, Divider, message, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { deleteHistory, getDetail, getHistoryList } from "./service";
import loading from '../../assets/loading.png';

function HistoryItem(props: { commodityId: number, onClick: any, id:number }){
  const [price,setPrice]=useState();
  const [guaranteePrice,setGuaranteePrice]=useState();
  const [name,setName]=useState('');
  const [image,setImage]=useState(loading);
  useEffect(() => {
    getDetail({id:props.commodityId}).then((res)=>{if(res.data.value){setPrice(res.data.value.rentPrice);setGuaranteePrice(res.data.value.guaranteePrice);setName(res.data.value.commodityName);setImage(res.data.value.subImages)}else{setName('商品已失效')}})
  }, [])
  return(
    <>
    <div style={{height: '100px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',width: '100%',}}>
      <div style={{width:'20%',textAlign:'center'}}>
        <img src={image} style={{width:90,height:90}}/>
      </div>
      <div style={{width:'20%',textAlign:'center'}}>
        <a href={'/detail?id='+props.commodityId}>
        <span style={{color:'black'}}>{name}</span>
        </a>
      </div>
      <div style={{width:'40%',textAlign:'center'}}>
        <span>￥{price}/天+保证金￥{guaranteePrice}</span>
      </div>
      <div style={{width:'20%',textAlign:'center'}}>
        <Button onClick={props.onClick} danger>删除</Button>
      </div>
    </div>
    <Divider/>
    </>
  )
}

function History(props:any){
  const[historyList,setHistoryList]=useState<Array<any>>([]);
  const [total, setTotal] = useState(1);
  const [current,setCurrent]=useState(1);
  useEffect(() => {
    getHistoryList(1,5).then((res)=>{setCurrent(res.data.value.current);setTotal(res.data.value.total);setHistoryList(res.data.value.records);});
  }, [])
  const deleteHandle=(id:number)=>{
    message.loading({ content: 'Loading...', key:id, duration:0});
    deleteHistory(id).then((res)=>{
      if(res.message==='请求成功'){
        console.log('删除历史'+id);
        getHistoryList(1,5).then((res)=>setHistoryList(res.data.value.records));
        message.success({ content: '删除成功', key:id ,duration:1});
      }
      else{
        message.info({ content: '删除失败', key:id ,duration:1});
      }
    })
  }

  const changePage = (pagenum: any, pagesize: any) => {
    getHistoryList(pagenum,pagesize).then((res) => {
      setCurrent(res.data.value.current);setTotal(res.data.value.total);setHistoryList(res.data.value.records);
    });
  };

  const historylist=historyList.map((history)=>{
    return(
      <HistoryItem onClick={()=>deleteHandle(history.id)} id={history.id} commodityId={history.commodityId} key={history.id}/>
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
            <span>图片</span>
          </div>
          <div style={{width:'20%',textAlign:'center'}}>
            <span>商品</span>
          </div>
          <div style={{width:'40%',textAlign:'center'}}>
            <span>价格</span>
          </div>
          <div style={{width:'20%',textAlign:'center'}}>
            <span>操作</span>
          </div>
        </div>
        {historylist}
        <div style={{ textAlign: 'center' }}>
          <Pagination
            style={{marginTop:20}}
            size="small"
            total={total}
            current={current}
            pageSize={5}
            showSizeChanger={false}
            onChange={changePage}
          />
        </div>
      </Col>
    </Row>
  )
}

export default History;
