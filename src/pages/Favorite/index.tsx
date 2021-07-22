/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:22:13
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 19:51:11
 */
import SiderMenu from "@/components/SiderMenu";
import { Row, Col, Button, Divider, message, Skeleton, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { deleteFavorite, getDetail, getFavoriteList } from "./service";
import loading from '../../assets/loading.png';

function FavoriteItem(props: { commodityName: string, commodityId: number, onClick: any, id:number,subImages:string }){
  const [loading,setLoading]=useState(false);
  const [price,setPrice]=useState();
  const [guaranteePrice,setGuaranteePrice]=useState();
  const [name,setName]=useState('');
  const [image,setImage]=useState(loading);
  useEffect(() => {
    setLoading(true);
    getDetail({id:props.commodityId}).then((res)=>{if(res.data.value){setPrice(res.data.value.rentPrice);setGuaranteePrice(res.data.value.guaranteePrice);setName(res.data.value.commodityName);setImage(res.data.value.subImages)}else{setName('商品已失效')}setLoading(false)})
  }, [])
  return(
    <Skeleton active loading={loading}>
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
        <span>￥{Number(price).toFixed(2)}/天+保证金￥{Number(guaranteePrice).toFixed(2)}</span>
      </div>
      <div style={{width:'20%',textAlign:'center'}}>
        <Popconfirm title="确定要删除吗？" placement={'bottomRight'} onConfirm={props.onClick} okText="确定" cancelText="取消">
          <Button danger>删除</Button>
        </Popconfirm>
      </div>
    </div>
    <Divider/>
    </Skeleton>
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
      <FavoriteItem commodityName={favorite.commodityName} subImages={favorite.subImages} onClick={()=>deleteHandle(favorite.id)} id={favorite.id} commodityId={favorite.commodityId} key={favorite.id}/>
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
