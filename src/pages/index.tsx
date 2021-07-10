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
      <Row gutter={{xs: 8, sm: 16, md: 24}} align="bottom">
        <Col span={4}>
          <Card title="商品列表" bordered={false} style={{ width: '100%' , height: 400}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={10}>
          <Carousel autoplay>
            <div>
              <a href=''>
                <img style={{height:'100%',width:'100%'}} src="https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png"/>
              </a>
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
        <Col span={6}>
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
          <Card title="个人信息" bordered={false} style={{ width: '100%' , height: '180'}}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          </div>
          <Card style={{ width: '100%' , height: 200 , marginTop: 10}}></Card>
          <div>

          </div>
        </Col>
      </Row>
      <Divider/>

      <Row>
        <Col span={6}>
          <Card style={{ width: '90%' , height: 200 ,margin:'0 auto'}}/>
        </Col>
        <Col span={6}>
          <Card style={{ width: '90%' , height: 200 ,margin:'0 auto'}}/>
        </Col>
        <Col span={6}>
          <Card style={{ width: '90%' , height: 200 ,margin:'0 auto'}}/>
        </Col>
        <Col span={6}>
          <Card style={{ width: '90%' , height: 200 ,margin:'0 auto'}}/>
        </Col>
      </Row>
      <Divider/>
      <Row>
        <h1 style={{marginLeft:'0.625%'}}>热销产品</h1>
      </Row>
      <Row>
        <Col span={3}>
          <ItemCard
          image='https://img.alicdn.com/imgextra/i3/6000000001226/O1CN01mTLirm1KvYGbpkCl2_!!6000000001226-2-octopus.png'
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
        <h1 style={{marginLeft:'0.625%'}}>最近上新</h1>
      </Row>
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
        <h1 style={{marginLeft:'0.625%'}}>分类名称</h1>
      </Row>
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
        <Col span={6}/>
        <Col span={12} style={{display:'flex',alignItems:'center',justifyContent:'space-around'}} >
          <div>
            <Card style={{ width:100, height: 100 ,margin:'0 auto'}}/>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>购物指南</p>
            </a>
          </div>
          <div>
            <Card style={{ width:100, height: 100 ,margin:'0 auto'}}/>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>配送方式</p>
            </a>
          </div>
          <div>
            <Card style={{ width:100, height: 100 ,margin:'0 auto'}}/>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>常见操作</p>
            </a>
          </div>
          <div>
            <Card style={{ width:100, height: 100 ,margin:'0 auto'}}/>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>售后服务</p>
            </a>
          </div>
          <div>
            <Card style={{ width:100, height: 100 ,margin:'0 auto'}}/>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>关于我们</p>
            </a>
          </div>
        </Col>
        <Col span={6}/>
      </Row>

    </div>
  );
}
