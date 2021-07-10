import React from 'react';
import SiderMenu from '@/components/SiderMenu';
import { Row, Col, Card, Avatar, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function My() {
  return (
    <Row justify="space-around" align="top">
      <Col span={5}>
        <SiderMenu selectedKey="sub1" />
      </Col>
      <Col span={15} style={{ marginTop: '30px' }}>
        <Card bordered={false} style={{ width: 900 }}>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Card>
        <Card
          title="我的订单"
          bordered={false}
          style={{ width: 900, marginTop: 20 }}
          extra={<a href="#">全部订单</a>}
        ></Card>
        <Card
          title="根据浏览，猜你喜欢"
          bordered={false}
          style={{ width: 900, marginTop: 20 }}
        ></Card>
      </Col>
      <Col span={4}>
        <div>
          <Card>
            <div style={{ marginLeft: 60 }}>
              <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
              <h2>Hi XXX</h2>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default My;
