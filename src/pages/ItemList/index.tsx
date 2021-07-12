import HomeFooter from "@/components/HomeFooter";
import ItemCard from "@/components/ItemCard";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import { Button, Col, Divider, InputNumber, Row } from "antd";
import React, { useState } from "react";

function ItemList(props: any){
  const [priceFilter, setPriceFilter] = useState(true);
  const [evaluFilter, setEvaluFilter] = useState(true);
  const [salesFilter, setSalesFilter] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [itemList, setItemList] = useState({});
  const [isInit, setIsInit] = useState(true);
  const SimpleRank=()=>{
    //todo
    setPriceFilter(true);setEvaluFilter(true);setSalesFilter(true);
    alert('点击了综合排序');
  }
  const PriceRank=()=>{
    //todo
    setPriceFilter(!priceFilter);setEvaluFilter(true);setSalesFilter(true);
    alert('点击了价格排序');
  }
  const EvaluRank=()=>{
    //todo
    setPriceFilter(true);setEvaluFilter(!evaluFilter);setSalesFilter(true);
    alert('点击了评价排序');
  }
  const SalesRank=()=>{
    //todo
    setPriceFilter(true);setEvaluFilter(true);setSalesFilter(!salesFilter);
    alert('点击了销售量排序');
  }
  const PriceSearch=()=>{
    //todo
    alert('最低'+minPrice+' 最高'+maxPrice);
    //tode
  }
  const NextPage=()=>{
    //tode
    alert('点击下一页');
  }

  if(isInit){

  }

  return(
    <>
    <div style={{height:100,display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
      <div style={{marginLeft:'5%',alignContent:'flex-start'}}>
        <span style={{marginRight:'80px'}}>商品分类</span>
        <span style={{marginRight:'80px'}}>商品分类</span>
        <span style={{marginRight:'80px'}}>商品分类</span>
        <span style={{marginRight:'80px'}}>商品分类</span>
        <span style={{marginRight:'80px'}}>商品分类</span>
        <span style={{marginRight:'80px'}}>商品分类</span>
        <span style={{marginRight:'80px'}}>商品分类</span>
      </div>
    </div>
    <div style={{height: '50px',display: 'flex',justifyContent: 'flex-start',alignItems: 'center',backgroundColor: '#C6DCF9',width: '100%',}}>
      <div style={{marginLeft:'5%'}}><span onClick={SimpleRank}>综合排序</span></div>
      <div style={{marginLeft:'80px'}}>
          价格
          <CaretUpFilled onClick={PriceRank} style={{display:priceFilter?'':'none'}}/>
          <CaretDownFilled onClick={PriceRank} style={{display:priceFilter?'none':''}}/>
      </div>
      <div style={{marginLeft:'50px'}}>
          评分
          <CaretUpFilled onClick={EvaluRank} style={{display:evaluFilter?'':'none'}}/>
          <CaretDownFilled onClick={EvaluRank} style={{display:evaluFilter?'none':''}}/>
      </div>
      <div style={{marginLeft:'50px'}}>
          成交量
          <CaretUpFilled onClick={SalesRank} style={{display:salesFilter?'':'none'}}/>
          <CaretDownFilled onClick={SalesRank} style={{display:salesFilter?'none':''}}/>
      </div>
      <div style={{marginLeft:'50px'}}>
        <InputNumber style={{width:'50px'}} size='small' precision={0} placeholder='最低' value={minPrice} onChange={(value)=>setMinPrice(value)}/>
        <span>元 - </span>
        <InputNumber style={{width:'50px'}} size='small' precision={0} placeholder='最高' value={maxPrice} onChange={(value)=>setMaxPrice(value)}/>
        <span>元 </span>
        <Button size='small' style={{width:'50px'}} onClick={PriceSearch}>确定</Button>
      </div>
      <div style={{display: 'flex',justifyContent: 'flex-end',width: '50%',alignItems: 'center',}}>
        <span>共999个商品</span>
        <span style={{marginLeft:'40px'}}>1/99页</span>
        <Button size='small' style={{marginLeft:'40px'}} onClick={NextPage}>下一页</Button>
      </div>
    </div>
    <Divider/>
    <Row>
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
      </Col>
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
      </Col>
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
      </Col>
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
      </Col>
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
      </Col>
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
      </Col>
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
      </Col>
      <Col span={4}>
        <ItemCard length={document.body.scrollWidth*0.166}
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
      </Col>
    </Row>
    {/* <Pagination size="small" total={total} pageSize={5} showSizeChanger={false}onChange={changePage}/> */}
    <Divider/>
    <HomeFooter/>
    </>
  )
}

export default ItemList;
