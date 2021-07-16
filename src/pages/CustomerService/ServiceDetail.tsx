import { Button } from 'antd';
import React from 'react';

const ServiceDetail: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: '20px',
        marginBottom: '20px'
      }}
    >
      <div>订单号： xxxxxxx</div>
      <div style={{ color: '#ABA8C0' }}>下单时间： xxxx-xx-xx xx:xx:xx</div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          style={{
            width: '100px',
            backgroundColor: 'gray',
            height: '100px',
            marginRight: '20px',
          }}
        ></div>
        <div style={{ flex: 1 }}>
          <Button
            danger
            style={{
              borderRadius: '20px',
              backgroundColor: '#F0CDCD',
              textAlign: 'center',
              border: '1px solid red',
              color: 'red',
              width: '70px',
              height: '30px',
            }}
          >
            申请
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
