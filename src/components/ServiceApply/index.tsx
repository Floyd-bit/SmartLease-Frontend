import { Button, Pagination, TableColumnGroupType, Tabs , Image } from 'antd';
import React from 'react';

interface TableColumnProps {
  orderId: string;
  orderProductImgSrc?: string;
  orderTime: string;
}
const TableColumn: React.FC<TableColumnProps> = props => {
  return (
    <div style={{ display: 'flex', height: '100px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2,
          borderLeft: '2px solid #D5D5D5',
          borderBottom: '2px solid #D5D5D5',
          borderRight: '2px solid #D5D5D5',
        }}
      >
        {props.orderId}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 3,
          borderBottom: '2px solid #D5D5D5',
          borderRight: '2px solid #D5D5D5',
        }}
      >
        <div style={{ width: '80px', height: '80px', backgroundColor: 'gray' }}><Image src="https://img.alicdn.com/imgextra/i3/24386130/O1CN01nHyquc1v9aZRNeTn9_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"/></div>
        <Button
          danger
          style={{
            borderRadius: '20px',
            backgroundColor: '#F0CDCD',
            textAlign: 'center',
            border: '1px solid red',
            color: 'red',
            width: '80px',
            height: '40px',
          }}
        >
          申请
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          borderBottom: '2px solid #D5D5D5',
          borderRight: '2px solid #D5D5D5',
        }}
      >
        联系卖家
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2,
          borderBottom: '2px solid #D5D5D5',
          borderRight: '2px solid #D5D5D5',
        }}
      >
        {props.orderTime}
      </div>
    </div>
  );
};
const ServiceApply: React.FC = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#C6DCF9',
          border: '2px solid #D5D5D5',
          height: '50px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 2 }}>
          订单号
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 3 }}>
          订单商品
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}
        ></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 2 }}>
          下单时间
        </div>
      </div>
      <TableColumn orderTime="2021/7/16" orderId="37" />
      <Pagination defaultCurrent={1} total={50} style={{ float: 'right', marginTop: '20px' }} />
    </div>
  );
};
export default ServiceApply;
