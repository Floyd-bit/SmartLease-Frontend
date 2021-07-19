/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:22:13
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 15:00:58
 */
import SiderMenu from "@/components/SiderMenu";
import { Row, Col, Button, Divider, message } from "antd";
import React, { useEffect, useState } from "react";
import { deleteFavorite, getDetail, getFavoriteList } from "./service";

function FavoriteItem(props: { commodityName: string, commodityId: number, onClick: any, id:number,subImages:string }){
  const [price,setPrice]=useState(-1);
  getDetail({id:props.commodityId}).then((res)=>{setPrice(res.data.value.rentPrice)})
  return(
    <>
    <div style={{height: '100px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',width: '100%',}}>
      <div style={{width:'20%',textAlign:'center'}}>
        <img src={props.subImages} style={{width:90,height:90}}/>
      </div>
      <div style={{width:'20%',textAlign:'center'}}>
        <a href={'/detail?id='+props.commodityId}>
        <span style={{color:'black'}}>{props.commodityName}</span>
        </a>
      </div>
      <div style={{width:'40%',textAlign:'center'}}>
        <span>￥{price}</span>
      </div>
      <div style={{width:'20%',textAlign:'center'}}>
        <Button onClick={props.onClick} danger>删除</Button>
      </div>
    </div>
    <Divider/>
    </>
  )
}

function Favorite(props:any){
  const[favoriteList,setFavoriteList]=useState<Array<{commodityName:string,subImages:string,id:number,commodityId:number}>>([]);
  useEffect(() => {
    getFavoriteList().then((res)=>setFavoriteList(res.data.value));
  }, [])
  const deleteHandle=(id:number)=>{
    message.loading({ content: 'Loading...', key:id, duration:5});
    deleteFavorite(id).then((res)=>{
      if(res.message==='删除成功'){
        console.log('删除收藏'+id);
        getFavoriteList().then((res)=>setFavoriteList(res.data.value));
        message.success({ content: '删除成功', key:id ,duration:1});
      }
      else{
        message.info({ content: '删除失败', key:id ,duration:1});
      }
    })
  }

  const favorites=favoriteList.map((favorite)=>{
    return(
      <FavoriteItem commodityName={favorite.commodityName} subImages={favorite.subImages} onClick={()=>deleteHandle(favorite.id)} id={favorite.id} commodityId={favorite.commodityId}/>
    )
  })
  return(
    <Row justify="space-around" align="top">
      <Col span={2}>
        <SiderMenu selectedKey="9" />
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
        {favorites}
      </Col>
    </Row>
  )
}

export default Favorite;
