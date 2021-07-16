import { Button } from 'antd';
import React from 'react';

const ServiceDetail: React.FC = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <div>订单号： xxxxxxx</div>
      <div>下单时间： xxxx-xx-xx xx:xx:xx</div>
      <div style={{ height: '55%', display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '100%', flex: 1, backgroundColor: 'gray' }}></div>
        <div style={{ flex: 1 }}>
          <Button
            danger
            style={{
              borderRadius: '20px',
              backgroundColor: '#F0CDCD',
              textAlign: 'center',
              border: '1px solid red',
              color: 'red',
              width: '100px',
              height: '40px',
            }}
          >
            申请售后
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;