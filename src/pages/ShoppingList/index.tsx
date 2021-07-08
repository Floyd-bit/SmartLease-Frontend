import React from 'react';
import SiderMenu from '../../components/SiderMenu';
import HistoryList from './HistoryList';
import { Row, Col } from 'antd';

function ShoppingList() {
  return (
    <Row justify="space-around" align="top" style={{marginTop: 40}}>
      <Col span={4}><SiderMenu/></Col>
      <Col span={20}><HistoryList/></Col>
    </Row>
    
  );
}

export default ShoppingList;
