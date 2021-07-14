/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-13 11:00:07
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 13:16:52
 */
import { Button, Input, message, Switch } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { addAddress, deleteAddress, editAddress } from "./service";

interface AddressRowProps {
  name: string;//收货人
  address: string; //收货地址
  isDefault: boolean;//是否默认
  id: number;//收货地址id
  isEdit: number; //是否是修改状态
  refresh: () => void//刷新父组件的函数
}

function AddressRow(props: AddressRowProps){
  const [name,setName] =useState(props.name);
  const [address,setAddress] = useState(props.address);
  const [isDefault,setIsDefault]=useState(props.isDefault);
  const [id,setId]=useState(props.id);
  const [isEdit, setIsEdit] = useState(props.isEdit);
  useEffect(() => {
    setName(props.name);
    setAddress(props.address);
    setIsDefault(props.isDefault);
  },[props.name,props.address,props.isDefault])
  const handleDelete=()=>{
    if(id!=-1){
      message.loading({ content: 'Loading...', key:id, duration:0});
      deleteAddress().then((res)=>{
        if(res.message==='success'){
          props.refresh();
          message.success({ content: '删除成功', key:id ,duration:1});
        }
        else{
          message.info({ content: '删除失败', key:id ,duration:1});
        }
      })
    }else{
      props.refresh();
      message.success({ content: '删除成功', key:id ,duration:1});
    }
  }
  const handleSave=()=>{
    if(name!=''&&address!=''){
      if(id!=-1){
        message.loading({ content: 'Loading...', key:id, duration:0});
        editAddress().then((res)=>{
          if(res.message==='success'){
            setIsEdit(0);
            props.refresh();
            message.success({ content: '保存成功', key:id ,duration:1});
          }
          else{
            message.info({ content: '保存失败', key:id ,duration:1});
          }
        })
      }
      else{
        message.loading({ content: 'Loading...', key:id, duration:0});
        addAddress().then((res)=>{
          if(res.message==='success'){
            setIsEdit(0);
            props.refresh();
            message.success({ content: '保存成功', key:id ,duration:1});
          }
          else{
            message.info({ content: '保存失败', key:id ,duration:1});
          }
        })
      }
    }
    else{
      message.info({ content: '姓名或地址不能为空', key:1 ,duration:1});
    }
  }
  if(isEdit===0){
    return(
      <div style={{height:50,display:'flex',justifyContent:'flex-start',alignItems:'center',width:'100%'}}>
        <div style={{width:'10%',textAlign:'center'}}>
          <span>{name}</span>
        </div>
        <div style={{width:'50%',marginLeft:'10%'}}>
          <span>{address}</span>
        </div>
        <div style={{width:'20%',textAlign:'center'}}>
          <span>{isDefault?'是':'否'}</span>
        </div>
        <div style={{width:'20%',textAlign:'center'}}>
          <Button size='small' style={{marginRight:10}} onClick={()=>setIsEdit(1)}>编辑</Button>
          <Button size='small' style={{marginLeft:10}} onClick={handleDelete}>删除</Button>
        </div>
      </div>
    )
  }
  else{
    return(
      <div style={{height:50,display:'flex',justifyContent:'flex-start',alignItems:'center',width:'100%'}}>
        <div style={{width:'10%',textAlign:'center'}}>
          <Input value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div style={{width:'50%',marginLeft:'10%'}}>
          <Input value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div style={{width:'20%',textAlign:'center'}}>
          <Switch checked={isDefault} onClick={(checked)=>setIsDefault(checked)}/>
        </div>
        <div style={{width:'20%',textAlign:'center'}}>
          <Button size='small' style={{marginRight:10}} onClick={handleSave}>保存</Button>
          <Button size='small' style={{marginLeft:10}} onClick={handleDelete}>删除</Button>
        </div>
      </div>
    )
  }
}

export default AddressRow;
