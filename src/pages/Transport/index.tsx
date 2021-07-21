/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-21 15:33:53
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-21 22:40:23
 */
import React, {useState,useEffect} from 'react';
import { Tabs,Row,Col, Table, Tag, Space, Tooltip, Button, Modal, notification, Input, message} from 'antd';
import SiderMenu from '@/components/SiderMenu';
import axios from 'axios';
import { QuestionCircleOutlined } from '@ant-design/icons';
import GetUserId from '@/utils/GetUserId';

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

const openNotification = () => {
  notification.open({
    message: '温馨提示',
    description:
      '在寄出快递后，请务必准确核对您的快递单号。支持中通、圆通、韵达、邮政、顺丰快递。',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const Transport = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data,setData] = useState([]);

  const backcolumns = [
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
      render: (_, record) => <Tag color='orange'>待归还</Tag>,
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
        <Button ghost type="primary" size="middle" onClick={()=>{showModal()}}>归还租品</Button>
      ],
    },
  ];
  
  const showModal = () => {
    setIsModalVisible(true);
    openNotification();
  };

  const handleOk = () => {
    message.success('提交成功');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios(`/api2/customer/order/getByUserId?pageNum=1&pageSize=5&userId=${GetUserId()}`);
      setData(result.data.data.value.records);
    };
    fetchData();
  },[]);

  return (
    <>
    <Row justify="space-around" align="top">
    <Col span={2}>
      <SiderMenu selectedKey="14" />
    </Col>
    <Col span={20} offset={2}>
    <div className="card-container">
    <Tabs type="card">
      <TabPane tab="已发货租品" key="1">
        <Table columns={columns} dataSource={data} />
      </TabPane>
      <TabPane tab="待退还租品" key="2">
      <Table columns={backcolumns} dataSource={data} />
      </TabPane>
    </Tabs>
  </div>
  </Col>
  </Row>
  <Modal title="填写快递单号" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="请填写快递单号"/>
  </Modal>
  </>
  );
}

export default Transport;
