import HomeFooter from '@/components/HomeFooter';
import { Button, Card, Col, Divider, Radio, Row } from 'antd';
import M from 'minimatch';
import Select from 'rc-select';
import React, { useEffect, useState } from 'react';
import { getDetail } from './service';

interface ParameterListProps {
  title: string;
  rowItems: { subtitle: string; description: string }[];
}
const rowItem1 = {
  title: '基本参数',
  rowItems: [
    {
      subtitle: '操作系统',
      description: 'iOS',
    },
    {
      subtitle: 'CPU频率',
      description: '1.3GHz',
    },
    {
      subtitle: '核心数',
      description: '双核',
    },
    {
      subtitle: '电池类型',
      description: '锂电池',
    },
  ],
};
/* const SelectCard = (props: { content: string }) => {
  return (
    <div
      style={{
        width: '50px',
        height: '25px',
        border: '1px solid gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
      }}
    >
      {props.content}
    </div>
  );
}; */
const ProductCard: React.FC = (props: any) => {
  return (
    <Card
      hoverable
      style={{ display: 'flex', flexDirection: 'column', width: '200px', padding: '0px' }}
    >
      <div style={{ width: '150px', height: '150px', backgroundColor: 'gray' }}></div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>{props.title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ color: 'red' }}>￥{props.price}</div>
          <div>
            <s>{props.preprice}</s>
          </div>
        </div>
      </div>
    </Card>
  );
};
const ParameterList: React.FC<ParameterListProps> = props => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '40px',
          backgroundColor: '#d9d9d9',
          fontSize: '20px',
          paddingLeft: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {props.title}
      </div>
      {props.rowItems.map(rowItem => {
        return (
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderRight: '1px solid #d9d9d9',
                borderBottom: '1px solid #d9d9d9',
                width: '15%',
                height: '30px',
                padding: '10px',
              }}
            >
              {rowItem.subtitle}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderBottom: '1px solid #d9d9d9',
                borderRight: '1px solid #d9d9d9',
                width: '85%',
                height: '30px',
                padding: '10px',
              }}
            >
              {rowItem.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const ProductDetail: React.FC = (props:any) => {
  const [detail, setDetail] = useState<any>({});
  const [bigimg, setBigimg] = useState('');
  useEffect(() => {
    getDetail({id:props.location.query.id?props.location.query.id:0}).then((res)=>{setDetail(res.data.value),setBigimg(res.data.value.subImages)});
  }, [props.location.query.id])
  return (
    <div>
      <Row>
        <Col
          span={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{ backgroundColor: 'gray', width: '520px', height: '520px', marginTop: '30px' }}
          >
            <img src={bigimg} style={{width:'100%',height:'100%'}}/>
          </div>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '15px' }}
            >
              <img src={detail.subImages} style={{width:'100%',height:'100%'}} onClick={()=>setBigimg(detail.subImages)}/>
            </div>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '15px' }}
            ></div>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '15px' }}
            ></div>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '15px' }}
            ></div>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '15px' }}
            ></div>
          </div>
        </Col>
        <Col
          span={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '30px',
          }}
        >
          <div style={{ fontSize: '30px', marginBottom: '20px' }}>
            {detail.title}
          </div>
          <div style={{ marginBottom: '20px', color: 'red' }}>
            {detail.description}
          </div>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <div>√ 七天以上包邮</div>
            <div>√ 线上租赁</div>
            {/*这里看后端字段*/}
          </div>
          <div style={{ display: 'flex' }}>
            租金：<p style={{ color: 'red', marginBottom: '20px' }}>￥{detail.rentPrice}/天</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            配送至： 广东省，广州市{/*这里要再讨论，先写死*/}
          </div>
          <div style={{ marginBottom: '20px' }}>优 惠 券</div>
          <div style={{ display: 'flex' }}>重 量： 0.32kg</div>
          <Divider style={{ backgroundColor: 'gray' }} />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            颜色分类：
            <Radio.Group defaultValue={1} buttonStyle="solid">
              <Radio.Button value={1} style={{margin: '10px',}}>银色</Radio.Button>
              <Radio.Button value={2} style={{margin: '10px',}}>银色</Radio.Button>
              <Radio.Button value={3} style={{margin: '10px',}}>银色</Radio.Button>
              <Radio.Button value={4} style={{margin: '10px',}}>银色</Radio.Button>
              <Radio.Button value={5} style={{margin: '10px',}}>银色</Radio.Button>
              <Radio.Button value={6} style={{margin: '10px',}}>银色</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            内存容量：
            <Radio.Group defaultValue={1} buttonStyle="solid">
              <Radio.Button value={1} style={{margin: '10px',}}>64G</Radio.Button>
              <Radio.Button value={2} style={{margin: '10px',}}>128G</Radio.Button>
              <Radio.Button value={3} style={{margin: '10px',}}>256G</Radio.Button>
            </Radio.Group>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '400px',
              justifyContent: 'space-between',
              marginBottom: '40px',
            }}
          >
            <div>数量（个）： - 1 +</div>
            <div>租期（天）： - 1 +</div>
          </div>
          <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between' }}>
            <Button style={{ width: '140px', height: '50px' }}>立即租赁</Button>
            <Button style={{ width: '140px', height: '50px' }}>加入购物车</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems:'flex-end',flexDirection:'column' }}>
            <div style={{ width:200 ,border:'1px solid #f0f0f0'}}>
              <div style={{ height:30,background:'#E3E9F2',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
                iPhone官方租赁体验店
              </div>
              <div style={{ height:50,display:'flex',alignItems:'center',justifyContent:'space-around' }}>
                <div style={{width:80,height:30,border:'1px solid #f0f0f0',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:10,background:'#E3E9F2'}}>进店逛逛</div>
                <div style={{width:80,height:30,border:'1px solid #f0f0f0',display:'flex',alignItems:'center',justifyContent:'center',marginRight:10,background:'#E3E9F2'}}>关注店铺</div>
              </div>
            </div>
            <div style={{ width:200,height:30,background:'#E3E9F2',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
              店内热销
            </div>
            <ProductCard
              title="苹果 iPhone 5s铝金属外壳"
              price="19999.99"
              preprice="69999.99"
            ></ProductCard>
            <ProductCard
              title="苹果 iPhone 5s铝金属外壳"
              price="19999.99"
              preprice="69999.99"
            ></ProductCard>
            <ProductCard
              title="苹果 iPhone 5s铝金属外壳"
              price="19999.99"
              preprice="69999.99"
            ></ProductCard>
            <ProductCard
              title="苹果 iPhone 5s铝金属外壳"
              price="19999.99"
              preprice="69999.99"
            ></ProductCard>
            <ProductCard
              title="苹果 iPhone 5s铝金属外壳"
              price="19999.99"
              preprice="69999.99"
            ></ProductCard>
          </div>
        </Col>
        <Col span={19} style={{}}>
          <div style={{ display: 'flex', alignItems:'center',flexDirection:'column' }}>
            <div style={{ width: '95%', height: '30px', border: '1px solid gray' }}></div>
            <div style={{ width: '95%', height: '1000px', backgroundColor: 'gray' }}></div>
          </div>
          <div style={{ width:'95%',margin:'auto',marginTop:10 }}>
            <ParameterList {...rowItem1} />
            <ParameterList {...rowItem1} />
            <ParameterList {...rowItem1} />
          </div>
        </Col>
      </Row>
      <Divider/>
      <HomeFooter/>
    </div>
  );
};

export default ProductDetail;
