/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-13 10:22:07
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-20 10:50:02
 */
import AddressRow from "@/components/AddressRow";
import SiderMenu from "@/components/SiderMenu";
import { Row, Col, Button } from "antd";
import React, { useEffect, useState } from "react";
import { getAddressList } from "./service";

function Address(props:any){
  const [addressList,setAddressList]=useState<Array<{receiverName:string,address:string,receiverPhone:string,isDefault:boolean,id:number}>>([])

  useEffect(() => {
    getAddressList().then((res)=>{
      setAddressList(res.data.value);
    })
  },[])

  const refresh=()=>{
    //window.location.reload()
    getAddressList().then((res)=>{
      setAddressList(res.data.value);
    })
  }

  const[fakeid,setFakeid]=useState(-1);
  const addAddress=()=>{
    let newaddressList=addressList.concat({receiverName:'',address:'',receiverPhone:'',isDefault:false,id:fakeid});
    setFakeid(fakeid-1);
    //id为小于0代表新增的收货地址
    setAddressList(newaddressList);
  }

  const addresses=addressList.map((address,index)=>{
    return(
      <AddressRow receiverName={address.receiverName} address={address.address} receiverPhone={address.receiverPhone} isDefault={address.isDefault} id={address.id} isEdit={address.receiverName===''?1:0} refresh={refresh} key={address.id}/>
    )
  });

  return(
    <Row justify="space-around" align="top">
      <Col span={2}>
        <SiderMenu selectedKey="11" />
      </Col>
      <Col span={20} offset={2}>
        <div>
          <Button style={{marginBottom:10,marginTop:10}} type='primary' onClick={addAddress}>添加收货地址</Button>
        </div>
        <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
          <div style={{width:'10%',textAlign:'center'}}>
            <span>收货人</span>
          </div>
          <div style={{width:'40%',marginLeft:'5%'}}>
            <span>收货地址</span>
          </div>
          <div style={{width:'10%',textAlign:'center'}}>
            <span>手机号</span>
          </div>
          <div style={{width:'20%',textAlign:'center'}}>
            <span>是否默认</span>
          </div>
          <div style={{width:'20%',textAlign:'center'}}>
            <span>操作</span>
          </div>
        </div>
        {addresses}
      </Col>
    </Row>
  )
}

export default Address;
