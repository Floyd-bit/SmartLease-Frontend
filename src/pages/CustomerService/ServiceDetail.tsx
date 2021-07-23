import { Button , Image} from 'antd';
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
      <div>订单号： 37</div>
      <div style={{ color: '#ABA8C0' }}>下单时间： 2021-7-23 10:47:56</div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          style={{
            width: '100px',
            backgroundColor: 'gray',
            height: '100px',
            marginRight: '20px',
          }}
        >
          <Image src="https://img.alicdn.com/imgextra/i3/24386130/O1CN01nHyquc1v9aZRNeTn9_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"/>
        </div>
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
