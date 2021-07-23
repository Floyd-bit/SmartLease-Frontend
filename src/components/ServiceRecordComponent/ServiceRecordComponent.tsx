import { Button, Pagination, TableColumnGroupType, Tabs } from 'antd';
import React from 'react';

interface TableColumnProps {
  serviceId: string;
  orderId: string;
  orderProductImgSrc?: string;
  productName: string;
  orderTime: string;
  status: boolean;
}
const TableColumn: React.FC<TableColumnProps> = props => {
  return (
    <div style={{ display: 'flex', height: '100px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          borderLeft: '2px solid #D5D5D5',
          borderBottom: '2px solid #D5D5D5',
          borderRight: '2px solid #D5D5D5',
        }}
      >
        {props.serviceId}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
          borderBottom: '2px solid #D5D5D5',
          borderRight: '2px solid #D5D5D5',
        }}
      >
        {props.orderId}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1.5,
          borderBottom: '2px solid #D5D5D5',
          borderRight: '2px solid #D5D5D5',
        }}
      >
        {props.productName}
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
        {props.orderTime}
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
        {props.status ? '已完成' : '未完成'}
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
        查看
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          返修/退换货编号
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          订单号
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1.5 }}>
          商品名称
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          申请时间
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          状态
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          操作
        </div>
      </div>
      <TableColumn
        orderTime="2021/7/16"
        orderId="25"
        productName="新款骁龙865手机5G全网通大屏智能安卓千元学生价游戏分期免息"
        serviceId="20"
        status
      />

      <Pagination defaultCurrent={1} total={50} style={{ float: 'right', marginTop: '20px' }} />
    </div>
  );
};
export default ServiceApply;
