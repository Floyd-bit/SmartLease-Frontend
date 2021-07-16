import SiderMenu from '@/components/SiderMenu';
import { Col, Row, Tabs } from 'antd';
import React from 'react';
import ServiceApply from '@/components/ServiceApply';
import ServiceRecordComponent from '@/components/ServiceRecordComponent/ServiceRecordComponent';

const ServiceRecord: React.FC = () => {
  const { TabPane } = Tabs;
  return (
    <Row>
      <Col span={1}>
        <SiderMenu />
      </Col>
      <Col offset={4} span={16}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="申 请" key="1">
            <ServiceApply />
          </TabPane>
          <TabPane tab="记 录" key="2">
            <ServiceRecordComponent />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default ServiceRecord;
