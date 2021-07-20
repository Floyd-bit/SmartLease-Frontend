import HomeFooter from '@/components/HomeFooter';
import { Button, Card, Col, Divider, message, Radio, Row } from 'antd';
import Select from 'rc-select';
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import { addFavorite, getDetail } from './service';
import { showCommodityListByTime } from '../service';
import { history } from 'umi';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

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
      onClick={() => history.push(`/detail?id=${props.id}`)}
    >
      <img width='150px' height='150px' src={props.src}></img>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          fontSize: '20px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', overflow: 'hidden'
        }}>{props.title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <div style={{ color: 'red' }}>￥{props.price}</div>
          <div>
            <s>{props.preprice}</s>
          </div>
        </div>
      </div>
    </Card >
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
const ProductDetail: React.FC = (props: any) => {
  const [storeProduct, setStoreProduct] = useState<any>([]);
  const [detail, setDetail] = useState<any>({ commodityName: '商品参数错误', subImages: '', description: '不存在id为' + props.location.query.id + '的商品', price: 99999.99 });
  //左侧大图
  const [bigimg, setBigimg] = useState('');
  //商品数量相关
  const [num, setNum] = useState(1);
  const NumberMinus = () => {
    if (num === 1) message.error('最小数量为1');
    else {
      setNum(num - 1);
    }
  };
  const NumberPlus = () => {
    setNum(num + 1);
  };
  //商品租期相关
  const [time, setTime] = useState(1);
  const TimeMinus = () => {
    if (time === 1) message.error('最小数量为1');
    else {
      setTime(time - 1);
    }
  };
  const TimePlus = () => {
    setTime(time + 1);
  };
  //加载商品详情
  useEffect(() => {
    getDetail({ id: props.location.query.id ? props.location.query.id : 0 }).then((res) => { if (res.data.value) { setDetail(res.data.value), setBigimg(res.data.value.subImages) } });
  }, [props.location.query.id])

  //点击立即租赁
  const handleBuy = ()=>{
    setTimeout(
      () => {
        history.push('/payment')
      },1000
    )
  }
  //收藏
  const handleFavorite = ()=>{
    addFavorite(detail.id).then((res)=>{if(res.message==='请求成功'&&res.data.value===true){message.success('收藏成功')}else if(res.message==='请求成功'&&res.data.value===false){message.success('已经收藏过了')}})
  }
  //加载店内热销
  useEffect(
    () => {
      showCommodityListByTime({ pageSize: 5, pageNum: 1 }).then(res =>
        setStoreProduct(res.data.value.records)
      )
    }, []
  );
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
            style={{  width: '520px', height: '520px', marginTop: '30px' }}
          >
            <img src={bigimg} style={{ width: '100%', height: '100%' }} />
          </div>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{ width: '80px', height: '80px', margin: '15px' }}
            >
              <img src={detail.subImages} style={{ width: '100%', height: '100%' }} onClick={() => setBigimg(detail.subImages)} />
            </div>
            <div
              style={{ width: '80px', height: '80px', margin: '15px' }}
            >
              <img src={detail.subImages} style={{ width: '100%', height: '100%' }} onClick={() => setBigimg(detail.subImages)} />
            </div><div
              style={{ width: '80px', height: '80px', margin: '15px' }}
            >
              <img src={detail.subImages} style={{ width: '100%', height: '100%' }} onClick={() => setBigimg(detail.subImages)} />
            </div><div
              style={{ width: '80px', height: '80px', margin: '15px' }}
            >
              <img src={detail.subImages} style={{ width: '100%', height: '100%' }} onClick={() => setBigimg(detail.subImages)} />
            </div><div
              style={{ width: '80px', height: '80px', margin: '15px' }}
            >
              <img src={detail.subImages} style={{ width: '100%', height: '100%' }} onClick={() => setBigimg(detail.subImages)} />
            </div>
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
          <div style={{
            fontSize: '30px', marginBottom: '20px'
          }}>
            {detail.commodityName}
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
              <Radio.Button value={1} style={{ margin: '10px' }}>
                银色
              </Radio.Button>
              <Radio.Button value={2} style={{ margin: '10px' }}>
                银色
              </Radio.Button>
              <Radio.Button value={3} style={{ margin: '10px' }}>
                银色
              </Radio.Button>
              <Radio.Button value={4} style={{ margin: '10px' }}>
                银色
              </Radio.Button>
              <Radio.Button value={5} style={{ margin: '10px' }}>
                银色
              </Radio.Button>
              <Radio.Button value={6} style={{ margin: '10px' }}>
                银色
              </Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            内存容量：
            <Radio.Group defaultValue={1} buttonStyle="solid">
              <Radio.Button value={1} style={{ margin: '10px' }}>
                64G
              </Radio.Button>
              <Radio.Button value={2} style={{ margin: '10px' }}>
                128G
              </Radio.Button>
              <Radio.Button value={3} style={{ margin: '10px' }}>
                256G
              </Radio.Button>
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'top',
                flex: 1,
              }}
            >
              数量：
              <Button
                shape="circle"
                icon={<MinusOutlined />}
                size="small"
                onClick={NumberMinus}
              ></Button>
              <div style={{ marginLeft: '20px', marginRight: '20px' }}>{num}</div>
              <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={NumberPlus}></Button>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'top',
                flex: 1,
              }}
            >
              租期(天)：
              <Button
                shape="circle"
                icon={<MinusOutlined />}
                size="small"
                onClick={TimeMinus}
              ></Button>
              <div style={{ marginLeft: '20px', marginRight: '20px' }}>{time}</div>
              <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={TimePlus}></Button>
            </div>
          </div>
          <div style={{ width: '500px', display: 'flex', justifyContent: 'space-between' }}>
            <Button style={{ width: '140px', height: '50px' }} onClick={handleBuy}>立即租赁</Button>
            <Button style={{ width: '140px', height: '50px' }}>加入购物车</Button>
            <Button style={{ width: '140px', height: '50px' }} onClick={handleFavorite}>收藏租品</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column',
            }}
          >
            <div style={{ width: 200, border: '1px solid #f0f0f0' }}>
              <div
                style={{
                  height: 30,
                  background: '#E3E9F2',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                iPhone官方租赁体验店
              </div>
              <div
                style={{
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 30,
                    border: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                    background: '#E3E9F2',
                  }}
                >
                  进店逛逛
                </div>
                <div
                  style={{
                    width: 80,
                    height: 30,
                    border: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                    background: '#E3E9F2',
                  }}
                >
                  关注店铺
                </div>
              </div>
            </div>
            <div
              style={{
                width: 200,
                height: 30,
                background: '#E3E9F2',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}
            >
              店内热销
            </div>
            {
              storeProduct.map(
                (item: any) =>

                  <ProductCard
                    title={item.commodityName}
                    price={item.rentPrice}
                    preprice="69999.99"
                    src={item.subImages}
                    id={item.id}
                  ></ProductCard>

              )
            }


          </div>
        </Col>
        <Col span={19} style={{}}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ width: '95%', height: '30px', border: '1px solid gray' }}></div>
            <div style={{ width: '95%', height: '1000px' }}>
              <img src={detail.subImages} width='100%' height='100%'></img>
            </div>
          </div>
          <div style={{ width: '95%', margin: 'auto', marginTop: 10 }}>
            <ParameterList {...rowItem1} />
            <ParameterList {...rowItem1} />
            <ParameterList {...rowItem1} />
          </div>
        </Col>
      </Row>
      <Divider />
      <HomeFooter />
    </div>
  );
};

export default ProductDetail;
