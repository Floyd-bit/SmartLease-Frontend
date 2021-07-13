import { Button, Card, Col, Divider, Row } from 'antd';
import M from 'minimatch';
import Select from 'rc-select';
import React from 'react';

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
const SelectCard = (props: { content: string }) => {
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
};
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
const ProductDetail: React.FC = props => {
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
            style={{ backgroundColor: 'gray', width: '500px', height: '500px', marginTop: '30px' }}
          ></div>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '20px' }}
            ></div>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '20px' }}
            ></div>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '20px' }}
            ></div>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '20px' }}
            ></div>
            <div
              style={{ backgroundColor: 'gray', width: '80px', height: '80px', margin: '20px' }}
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
            苹果iPhone12九成新已激活出租 {/* props.title*/}
          </div>
          <div style={{ marginBottom: '20px', color: 'red' }}>
            支持联通移动电信5G 双卡双待手机 {/* props.description*/}
          </div>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <div>√ 七天以上包邮</div>
            <div>√ 线上租赁</div>
            {/*这里看后端字段*/}
          </div>
          <div style={{ display: 'flex' }}>
            租金：<p style={{ color: 'red', marginBottom: '20px' }}>￥2/天{/*props.price*/}</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            配送至： 广东省，广州市{/*这里要再讨论，先写死*/}
          </div>
          <div style={{ marginBottom: '20px' }}>优 惠 券</div>
          <div style={{ display: 'flex' }}>重 量： 0.32kg</div>
          <Divider style={{ backgroundColor: 'gray' }} />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            颜色分类：
            <SelectCard content="银色" />
            <SelectCard content="银色" />
            <SelectCard content="银色" />
            <SelectCard content="银色" />
            <SelectCard content="银色" />
            <SelectCard content="银色" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            内存容量：
            <SelectCard content="64GB" />
            <SelectCard content="128GB" />
            <SelectCard content="256GB" />
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
          <div style={{ width: '400px', display: 'flex', justifyContent: 'space-between' }}>
            <Button style={{ width: '140px', height: '70px' }}>立即租赁</Button>
            <Button style={{ width: '140px', height: '70px' }}>加入购物车</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ width: '1000px', marginLeft: '30px' }} span={4}>
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
        </Col>
        <Col span={16} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ width: '100%', height: '30px', border: '1px solid gray' }}></div>
          <div style={{ width: '100%', height: '1000px', backgroundColor: 'gray' }}></div>
          <ParameterList {...rowItem1} />
          <ParameterList {...rowItem1} />
          <ParameterList {...rowItem1} />
          
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
