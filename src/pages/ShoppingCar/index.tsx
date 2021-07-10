/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 10:23:04
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-10 11:22:33
 */
import React from 'react';
import ShoppingCarItem from '@/components/ShoppingCarItem';
import SiderMenu from '@/components/SiderMenu';
import { Button, Col,Row } from 'antd';

function ShoppingCar() {
  return (
    <><div>
      <Row justify="space-around" align="top">
        <Col span={1}>
          <SiderMenu />
        </Col>
        <Col span={18}>
          <div
            style={{
              height: '50px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#C6DCF9',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
              <div>图片</div>
              <div>商品</div>
              <div>价格</div>
              <div>数量</div>
              <div>小计</div>
              <div>操作</div>
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
            src=""
            name="商品"
            count={2}
            payment={true} />
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
            src=""
            name="商品"
            count={2}
            payment={true} />
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
            src=""
            name="商品"
            count={2}
            payment={true} />    
          <div style={{width:'100%',backgroundColor:'#C6DCF9' ,height: '50px'}}>
            <Row>
              <Col span={16}></Col>
              <Col span={3} style={{marginTop:'13px'}}>合计：￥31,11.08</Col>
              <Col span={3} offset={2} style={{marginTop:'5px'}}>
              <Button type="primary" danger size="large">清空</Button>
              <Button type="primary" size="large">结算</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>

    </>
  );
}

export default ShoppingCar;
