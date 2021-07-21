/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-21 16:32:53
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-21 16:55:12
 */
import SiderMenu from '@/components/SiderMenu';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Descriptions, Divider, Timeline, Row, Col } from 'antd';
import React from 'react';

const TransportDetail = () => {
  return (
    <>
    <Row justify="space-around" align="top">
    <Col span={2}>
      <SiderMenu selectedKey="14" />
    </Col>
    <Col span={20} offset={2}>
      <Descriptions title="物流详情">
        <Descriptions.Item label="收货人姓名">赵卓轩</Descriptions.Item>
        <Descriptions.Item label="收货人电话">1810000000</Descriptions.Item>
        <Descriptions.Item label="配送至">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="详细地址">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions> 
    <Divider orientation="left">快递动态</Divider>
      <div style={{marginTop:'200' , marginLeft: '200'}}>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
      </div>
      </Col>
      </Row>
    </>
  );
}

export default TransportDetail;
