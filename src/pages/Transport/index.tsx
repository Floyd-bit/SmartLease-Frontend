/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-21 15:33:53
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-21 16:49:21
 */
import React, {useState,useEffect} from 'react';
import { Tabs,Row,Col, Table, Tag, Space, Tooltip, Button} from 'antd';
import SiderMenu from '@/components/SiderMenu';
import axios from 'axios';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const columns = [
  {
    title: '订单号',
    width: 120,
    dataIndex: 'id',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    render: (_, record) => <Tag color='blue'>{record.status}</Tag>,
  },
  {
    title: '折扣',
    width: 120,
    dataIndex: 'discount',
    align: 'right',
  },
  {
    title: '模式',
    width: 120,
    dataIndex: 'deliveryMode',
    align: 'right',
  },
  {
    title: '运费',
    width: 120,
    dataIndex: 'transportPrice',
    align: 'right',
  },
  {
    title: '操作',
    width: 164,
    key: 'option',
    valueType: 'option',
    render: () => [
      <Button ghost type="primary" size="middle" onClick={()=>{window.location.href='transportdetail'}}>查看物流</Button>
    ],
  },
];
const Transport = () => {

  const [data,setData] = useState([]);
  useEffect(async () => {
    const result = await axios(`/api2/customer/order/getByUserId?pageNum=1&pageSize=5&userId=2`);
    setData(result.data.data.value.records);
  },[]);

  return (
    <Row justify="space-around" align="top">
    <Col span={2}>
      <SiderMenu selectedKey="14" />
    </Col>
    <Col span={20} offset={2}>
    <div className="card-container">
    <Tabs type="card">
      <TabPane tab="已到期租品" key="1">
        <Table columns={columns} dataSource={data} />
      </TabPane>
      <TabPane tab="已退还租品" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
    </Tabs>
  </div>
  </Col>
  </Row>
  );
}

export default Transport;
