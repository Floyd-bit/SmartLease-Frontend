import { Carousel, Card } from 'antd';
import React from 'react';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CardItem = () => {
  return (
    <Card style={{ width: '350px', height: '450px' }} hoverable>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '450px',
        }}
      >
        <div style={{ flex: 4 }}>
          <div style={{ backgroundColor: 'gray', width: '150px', height: '200px' }}></div>
        </div>
        <div style={{ flex: 1 }}>iPhone 12</div>
        <div style={{ flex: 0.5 }}>64GB 蓝色</div>
        <div style={{ flex: 0.5 }}>移动联通手机 5G手机 双卡双待</div>
        <div style={{ flex: 2, marginTop: '10px', color: 'red', fontSize: '20px' }}>￥299 / 天</div>
      </div>
    </Card>
  );
};
const StoreDetail: React.FC = () => {
  return (
    <div
      style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '50px',
          marginTop: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '300px' }}>
          <div style={{ fontSize: '15px' }}>联系客服</div>
          <div style={{ fontSize: '15px' }}>关注店铺</div>
        </div>
      </div>
      <div style={{ marginLeft: '50px', fontSize: '25px', marginBottom: '1px' }}>
        IPHONE官方租赁体验店
      </div>
      <div
        style={{
          display: 'flex',
          height: '60px',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: 'white',
          backgroundColor: '#393736',
          paddingLeft: '50px',
          fontSize: '15px',
        }}
      >
        <div style={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
          <div>首页</div>

          <div>MAC</div>

          <div>IPAD</div>

          <div>IPHONE</div>

          <div>WATCH</div>

          <div>IPOD</div>
          <div>配件</div>
        </div>
      </div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div
        style={{
          marginTop: '50px',
          marginBottom: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '90%',
          height: '300px',
          backgroundColor: 'gray',
        }}
      ></div>
      <div style={{ marginLeft: '20px', fontSize: '20px' }}>Iphone</div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
        }}
      >
        <div style={{ flex: 1 }}>
          <CardItem />
        </div>
        <div style={{ flex: 1 }}>
          <CardItem />
        </div>
        <div style={{ flex: 1 }}>
          <CardItem />
        </div>
        <div style={{ flex: 1 }}>
          <CardItem />
        </div>
      </div>
      <div
        style={{
          color: 'white',
          backgroundColor: '#393736',
          height: '60px',
          width: '100%',
          marginTop: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '20%',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <div>销量</div>
          <div>价格</div>
          <div>好评度</div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          display: 'flex',
          padding: '30px',
          justifyContent: 'space-around',
          border: '2px solid gray',
        }}
      >
        <div style={{ width: '17%', height: '400px', backgroundColor: 'gray' }}></div>
        <div style={{ width: '17%', height: '400px', backgroundColor: 'gray' }}></div>
        <div style={{ width: '17%', height: '400px', backgroundColor: 'gray' }}></div>
        <div style={{ width: '17%', height: '400px', backgroundColor: 'gray' }}></div>
        <div style={{ width: '17%', height: '400px', backgroundColor: 'gray' }}></div>
      </div>
    </div>
  );
};

export default StoreDetail;
