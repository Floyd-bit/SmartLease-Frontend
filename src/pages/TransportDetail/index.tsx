/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-21 16:32:53
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-21 22:25:03
 */
import SiderMenu from '@/components/SiderMenu';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Descriptions, Divider, Timeline, Row, Col } from 'antd';
import React,{useState,useEffect}from 'react';
import axios from 'axios';
import GetUserId from '@/utils/GetUserId';

const TransportDetail = () => {
  const [data,setData] = useState([0]);
  useEffect(() => {
    const fetchData = async () => { 
      const result = await axios(`/api2/customer/address/selectByUserId?userId=${GetUserId()}`);
      setData((await result).data.data.value);
    }
    fetchData();
    // console.log(result.data.data.value);
  },[]);
  return (
    <>
    <Row justify="space-around" align="top">
    <Col span={2}>
      <SiderMenu selectedKey="14" />
    </Col>
    <Col span={20} offset={2}>
      <div>
        <div>
      <Descriptions title="物流详情">
        <Descriptions.Item label="收货人姓名">{data[0].receiverName}</Descriptions.Item>
        <Descriptions.Item label="收货人电话">{data[0].receiverPhone}</Descriptions.Item>
        <Descriptions.Item label="国家">{data[0].country}</Descriptions.Item>
        <Descriptions.Item label="省份">{data[0].province}</Descriptions.Item>
        <Descriptions.Item label="城市">{data[0].city}</Descriptions.Item>
        <Descriptions.Item label="详细地址">
          {data[0].address}
        </Descriptions.Item>
      </Descriptions> 
    <Divider orientation="left">快递动态</Divider>
    </div>
      <div className="timeline" style={{margin: 100}}>
      <Timeline>
        <Timeline.Item>已发货  包裹正在等待揽收</Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
          运输中  已离开 湖北武汉分拨中心；发往 湖北武汉电脑城公司
        </Timeline.Item>
        <Timeline.Item>派送中</Timeline.Item>
        <Timeline.Item>已签收</Timeline.Item>
      </Timeline>
      </div>
      </div>
      </Col>
      </Row>
    </>
  );
}

export default TransportDetail;
