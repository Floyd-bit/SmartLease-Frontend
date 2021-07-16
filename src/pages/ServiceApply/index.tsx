import ServiceInformation from '@/components/ServiceInformation';
import ServiceTable from '@/components/ServiceTable';
import ServiceTitle from '@/components/ServiceTitle';
import SiderMenu from '@/components/SiderMenu';
import { Col, Row } from 'antd';
import React from 'react';

const ServiceApply: React.FC = () => {
  return (
    <Row>
      <Col span={1}>
        <SiderMenu />
      </Col>
      <Col offset={3} span={18}>
        <div style={{ marginBottom: '40px' }}>
          <ServiceTitle />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <ServiceTable />
        </div>
        <ServiceInformation />
      </Col>
    </Row>
  );
};

export default ServiceApply;
