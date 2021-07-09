import React from 'react';
import styles from './index.css';
import { Row, Col, Divider, Card, Carousel } from 'antd';
import Product from '../components/Product';
import ItemCard from '@/components/ItemCard';

const contentStyle1 = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const contentStyle2 = {
  height: '130px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function() {
  return (
    <div>
      <Row  justify="space-around" align="middle">
        <Col span={4}>
          <Card title="商品列表" bordered={false} style={{ width: 300 , height: 400}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={8} offset={1}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle1}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle1}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle1}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle1}>4</h3>
            </div>
          </Carousel>
        </Col>
        <Col span={4}>
          <div>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle2}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>4</h3>
            </div>
          </Carousel>
          </div>
          <div>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle2}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>4</h3>
            </div>
          </Carousel>
          </div>
          <div>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle2}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle2}>4</h3>
            </div>
          </Carousel>
          </div>
        </Col>
        <Col span={4}>
          <div>
          <Card title="个人信息" bordered={false} style={{ width: 300 , height: 180}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          </div>
          <Card style={{ width: 300 , height: 200 , marginTop: 10}}></Card>
          <div>

          </div>
        </Col>
      </Row>
      <Divider/>
      <Row>
        <Col span={6}>1</Col>
        <Col span={6}>2</Col>
        <Col span={6}>3</Col>
        <Col span={6}>4</Col>
      </Row>
      <Divider/>
      <Row>
        <Col span={6}>
          <Product/>
        </Col>
        <Col span={6}>2</Col>
        <Col span={6}>3</Col>
        <Col span={6}>4</Col>
      </Row>
      <Divider/>
      <Row>
        <Col span={3}>
          <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/673079074/TB2VWYbtZyYBuNkSnfoXXcWgVXa_!!673079074.jpg_200x200q90.jpg'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/673079074/TB2VWYbtZyYBuNkSnfoXXcWgVXa_!!673079074.jpg_200x200q90.jpg'
          title='商品名称' price='9999.99' oldprice='9999.99' id='2'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/673079074/TB2VWYbtZyYBuNkSnfoXXcWgVXa_!!673079074.jpg_200x200q90.jpg'
          title='商品名称' price='9999.99' oldprice='9999.99' id='3'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/673079074/TB2VWYbtZyYBuNkSnfoXXcWgVXa_!!673079074.jpg_200x200q90.jpg'
          title='商品名称' price='9999.99' oldprice='9999.99' id='4'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/673079074/TB2VWYbtZyYBuNkSnfoXXcWgVXa_!!673079074.jpg_200x200q90.jpg'
          title='商品名称' price='9999.99' oldprice='9999.99' id='5'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/673079074/TB2VWYbtZyYBuNkSnfoXXcWgVXa_!!673079074.jpg_200x200q90.jpg'
          title='商品名称' price='9999.99' oldprice='9999.99' id='6'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/673079074/TB2VWYbtZyYBuNkSnfoXXcWgVXa_!!673079074.jpg_200x200q90.jpg'
          title='商品名称' price='9999.99' oldprice='9999.99' id='7'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/673079074/TB2VWYbtZyYBuNkSnfoXXcWgVXa_!!673079074.jpg_200x200q90.jpg'
          title='商品名称' price='9999.99' oldprice='9999.99' id='8'/>
        </Col>
      </Row>
      <Divider/>
      <Row>
        <Col span={6}>1</Col>
        <Col span={6}>2</Col>
        <Col span={6}>3</Col>
        <Col span={6}>4</Col>
      </Row>

    </div>
  );
}
