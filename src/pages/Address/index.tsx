import AddressRow from "@/components/AddressRow";
import SiderMenu from "@/components/SiderMenu";
import { Row, Col, Button } from "antd";
import React, { useEffect, useState } from "react";
import { getAddressList } from "./servise";

function Address(props:any){
  const [addressList,setAddressList]=useState([])

  useEffect(() => {
    getAddressList().then((res)=>{
      setAddressList(res.data);
    })
  },[])

  const refresh=()=>{
    //window.location.reload()
    getAddressList().then((res)=>{
      setAddressList(res.data);
    })
  }

  const addAddress=()=>{
    let newaddressList=addressList.concat({name:'',address:'',isDefault:false});
    setAddressList(newaddressList);
  }

  const addresses=addressList.map((address,index)=>{
    return(
      <AddressRow name={address.name} address={address.address} isDefault={address.isDefault} id={address.id} isEdit={address.name===''?1:0} refresh={refresh} key={address.id}/>
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
          <div style={{width:'50%',marginLeft:'10%'}}>
            <span>收货地址</span>
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
