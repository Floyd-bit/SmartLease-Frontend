/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 10:23:04
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-15 16:07:54
 */
import React from 'react';
import ShoppingCarItem from '@/components/ShoppingCarItem';
import SiderMenu from '@/components/SiderMenu';
import { Button, Col, Row } from 'antd';

function ShoppingCar() {
  return (
    <Row justify="space-around" align="top">
      <Col span={2}>
        <SiderMenu selectedKey="5" />
      </Col>
      <Col span={20} offset={2}>
        <div style={{ width: '100%',}}>
          <div
            style={{
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#C6DCF9',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
              }}
            >
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>图片</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>商品</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>价格</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>数量</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>小计</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>操作</div>
            </div>
          </div>
          <ShoppingCarItem
            gmtCreate="2020/7/8"
            id="1123123123"
            receiver="syx"
            phone="12345678"
            number={1}
            productName="苹果 iPad mini3 MGY92CH苹果 iPad mini3 MGY92CH "
            color="红色"
            size="32G"
            price="99999.99"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
            name="商品"
            count={2}
            payment={true}
          />
          <ShoppingCarItem
            gmtCreate="2020/7/8"
            id="1123123123"
            receiver="syx"
            phone="12345678"
            number={1}
            productName="苹果 iPad mini3 MGY92CH苹果 iPad mini3 MGY92CH "
            color="红色"
            size="32G"
            price="99999.99"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
            name="商品"
            count={2}
            payment={true}
          />
          <ShoppingCarItem
            gmtCreate="2020/7/8"
            id="1123123123"
            receiver="syx"
            phone="12345678"
            number={1}
            productName="苹果 iPad mini3 MGY92CH苹果 iPad mini3 MGY92CH "
            color="红色"
            size="32G"
            price="99999.99"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16ac55cd89b6ab5f015a2e5c9392dc2e.jpg"
            name="商品"
            count={2}
            payment={true}
          />
          <div style={{ width: '100%', backgroundColor: '#C6DCF9', height: '50px' }}>
            <Row>
              <Col span={16}></Col>
              <Col span={3} style={{ marginTop: '13px' }}>
                合计：￥31,11.08
              </Col>
              <Col span={3} offset={2} style={{ marginTop: '5px' }}>
                <Button type="primary" danger size="large">
                  清空
                </Button>
                <Button type="primary" size="large">
                  结算
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ShoppingCar;
