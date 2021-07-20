/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-12 08:48:25
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-20 09:53:55
 */
import HomeFooter from "@/components/HomeFooter";
import ItemCard from "@/components/ItemCard";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import { Button, Col, Divider, InputNumber, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "umi";
import { getItemList } from "./service";

function ItemList(props: any){
  const [page, setPage]=useState(1);
  const [rank, setRank] = useState('0');
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [min, setMin] = useState(null);//输入框的值
  const [max, setMax] = useState(null);//输入框的值
  const [itemList, setItemList] = useState<Array<any>>([]);
  const [isInit, setIsInit] = useState(true);
  const [total, setTotal] = useState(1);
  //点击综合排序
  const SimpleRank=()=>{
    setRank('0')
  }
  //点击价格旁的按钮
  const PriceRank=()=>{
    if(rank!='1') {setRank('1')} else if(rank==='1') {setRank('2')};
  }
  //点击评价旁的按钮
  const EvaluRank=()=>{
    if(rank!='3') {setRank('3')} else if(rank==='3') {setRank('4')};
  }
  //点击销成交旁的按钮
  const SalesRank=()=>{
    if(rank!='5') {setRank('5')} else if(rank==='5') {setRank('6')};
  }
  //初次加载页面和改变排序后执行的操作
  useEffect(() => {getItemList({type:props.location.query.type?props.location.query.type:'',rank:rank,pagenum:1,pagesize:24,minprice:minPrice,maxprice:maxPrice}).then(res=>{setPage(1);setTotal(res.data.value.total);setItemList(res.data.value.records);})}, [maxPrice, minPrice, props.location.query.type, rank]);
  //设定价格范围
  const PriceSearch=()=>{
    setMaxPrice(max);
    setMinPrice(min);
    getItemList({type:props.location.query.type?props.location.query.type:'',rank:rank,pagenum:1,pagesize:24,minprice:min,maxprice:max}).then(res=>{setPage(1);setTotal(res.data.value.total);setItemList(res.data.value.records);});
  }
  //点击下一页
  const NextPage=()=>{
    let newpage=page+1;
    getItemList({type:props.location.query.type?props.location.query.type:'',rank:rank,pagenum:newpage,pagesize:24,minprice:minPrice,maxprice:maxPrice}).then(res=>{setPage(newpage);setTotal(res.data.value.total);setItemList(res.data.value.records);});
  }
  //点击底部分页
  const changePage=(pagenum:any,pagesize:any)=>{
    getItemList({type:props.location.query.type?props.location.query.type:'',rank:rank,pagenum:pagenum,pagesize:pagesize,minprice:minPrice,maxprice:maxPrice}).then(res=>{setPage(pagenum);setTotal(res.data.value.total);setItemList(res.data.value.records);});
  }

  if(isInit){
    setIsInit(false);
  }

  const items = itemList.map((item) => {
    return (
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image={item.subImages}
          title={item.commodityName} price={item.rentPrice} guaranteePrice={item.guaranteePrice} id={item.id}/>
      </Col>
    );
  });

  return(
    <>
    <div style={{height:100,display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
      <div style={{marginLeft:'5%',alignContent:'flex-start'}}>
        <span style={{marginRight:'80px'}}><Link to="/itemlist?type=1" style={{color:props.location.query.type!=1?'black':''}}>游戏装备</Link></span>
        <span style={{marginRight:'80px'}}><Link to="/itemlist?type=2" style={{color:props.location.query.type!=2?'black':''}}>数码摄影</Link></span>
        <span style={{marginRight:'80px'}}><Link to="/itemlist?type=3" style={{color:props.location.query.type!=3?'black':''}}>电脑办公</Link></span>
        <span style={{marginRight:'80px'}}><Link to="/itemlist?type=4" style={{color:props.location.query.type!=4?'black':''}}>精品手机</Link></span>
        <span style={{marginRight:'80px'}}><Link to="/itemlist?type=5" style={{color:props.location.query.type!=5?'black':''}}>娱乐影音</Link></span>
      </div>
    </div>
    <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
      <div style={{marginLeft:'5%'}}><span onClick={SimpleRank} style={{color:rank==='0'?'blue':'black'}}>综合排序</span></div>
      <div style={{marginLeft:'80px'}}>
          价格
          <CaretUpFilled onClick={PriceRank} style={{display:rank!='1'?'':'none',color:rank==='2'?'blue':'black'}}/>
          <CaretDownFilled onClick={PriceRank} style={{display:rank!='1'?'none':'',color:rank==='1'?'blue':'black'}}/>
      </div>
      <div style={{marginLeft:'50px'}}>
          评分
          <CaretUpFilled onClick={EvaluRank} style={{display:rank!='3'?'':'none',color:rank==='4'?'blue':'black'}}/>
          <CaretDownFilled onClick={EvaluRank} style={{display:rank!='3'?'none':'',color:rank==='3'?'blue':'black'}}/>
      </div>
      <div style={{marginLeft:'50px'}}>
          成交量
          <CaretUpFilled onClick={SalesRank} style={{display:rank!='5'?'':'none',color:rank==='6'?'blue':'black'}}/>
          <CaretDownFilled onClick={SalesRank} style={{display:rank!='5'?'none':'',color:rank==='5'?'blue':'black'}}/>
      </div>
      <div style={{marginLeft:'50px'}}>
        <InputNumber style={{width:'50px'}} size='small' min='0' precision={0} placeholder='最低' value={min} onChange={(value)=>setMin(value)}/>
        <span>元 - </span>
        <InputNumber style={{width:'50px'}} size='small' min='0' precision={0} placeholder='最高' value={max} onChange={(value)=>setMax(value)}/>
        <span>元 </span>
        <Button size='small' style={{width:'50px'}} onClick={PriceSearch}>确定</Button>
      </div>
      <div style={{display: 'flex',justifyContent: 'flex-end',width: '50%',alignItems: 'center',}}>
        <span>共{total}个商品</span>
        <span style={{marginLeft:'40px'}}>{page}/{Math.ceil(total/24)}页</span>
        <Button size='small' style={{marginLeft:'40px'}} onClick={NextPage} disabled={Number(page)<Math.ceil(total/24)?false:true}>下一页</Button>
      </div>
    </div>
    <Divider/>
    <Row>
      {items}
    </Row>
    <div style={{ textAlign: 'center' }}>
      <Pagination style={{marginTop:20}} size="small" total={total} current={Number(page)} pageSize={24} showSizeChanger={false} onChange={changePage}/>
    </div>
    <Divider/>
    <HomeFooter/>
    </>
  )
}

export default ItemList;
