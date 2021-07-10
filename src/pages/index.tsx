import React from 'react';
import styles from './index.css';
import { Row, Col, Divider, Card, Carousel, Button } from 'antd';
import Product from '../components/Product';
import ItemCard from '@/components/ItemCard';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';

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
      <Row gutter={{xs: 8, sm: 16, md: 24}} align="bottom" style={{width:'100%'}}>
        <Col span={4}>
          <Card title="主题市场" bordered={false} style={{ width: '100%' , height: 400}}>
            <p>家用电器<br/>手机　运营商　数码</p>
            <p>家用电器<br/>手机　运营商　数码</p>
            <p>家用电器<br/>手机　运营商　数码</p>
            <p>家用电器<br/>手机　运营商　数码</p>
            <p>家用电器<br/>手机　运营商　数码</p>
          </Card>
        </Col>
        <Col span={10}>
          <Carousel autoplay>
            <div>
              <a href=''>
                <img style={{height:400,width:'100%'}} src="https://img.alicdn.com/imgextra/i3/6000000000038/O1CN01A0E2931C9Rk0yD9R8_!!6000000000038-0-octopus.jpg"/>
              </a>
            </div>
            <div>
              <a href=''>
                <img style={{height:400,width:'100%'}} src="https://a1.alicdn.com/assets/p4p-fallback/mm_12852562_1778064_13670999.jpg"/>
              </a>
            </div>
            <div>
              <a href=''>
                <img style={{height:400,width:'100%'}} src="https://a1.alicdn.com/assets/p4p-fallback/mm_12852562_1778064_13674396.jpg"/>
              </a>
            </div>
            <div>
              <a href=''>
                <img style={{height:400,width:'100%'}} src="https://a1.alicdn.com/assets/p4p-fallback/mm_12852562_1778064_13672849.jpg"/>
              </a>
            </div>
          </Carousel>
        </Col>
        <Col span={6}>
          <div style={{height:130,marginBottom:5}}>
          <Carousel autoplay>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"/>
            </div>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"/>
            </div>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340"/>
            </div>
          </Carousel>
          </div>
          <div style={{height:130,marginBottom:5}}>
          <Carousel autoplay>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"/>
            </div>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340"/>
            </div>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"/>
            </div>
          </Carousel>
          </div>
          <div style={{height:130}}>
          <Carousel autoplay>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340"/>
            </div>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"/>
            </div>
            <div>
              <img style={{height:130,width:'100%'}} src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"/>
            </div>
          </Carousel>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ width: '100%' , height: '190'}}>
          {/* 暂时用图片代替，等孙少实现 */}
            <Card>
              <div style={{marginLeft:"50px"}}>
              <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src='https://img0.baidu.com/it/u=493108106,1771945000&fm=26&fmt=auto&gp=0.jpg'/>
              <h2>Hi! 下午好</h2>
              </div>
              <div style={{marginLeft:"25px"}}>
              <Button>登录</Button>
              <Button>注册</Button>
              </div>
            </Card>
          </div>
          <div style={{ width: '100%' , height: 200 , marginTop: 10}}>
            <img style={{height:200,width:'100%'}} src="https://img.alicdn.com/tfs/TB1x7TyENYaK1RjSZFnXXa80pXa-502-380.jpg_240x240q90.jpg"/>
          </div>
        </Col>
      </Row>
      <Divider/>

      <Row>
        <Col span={6}>
          <div style={{ width: '90%' , height: 200 ,margin:'0 auto'}}>
            <img style={{height:200,width:'100%'}} src="https://img.alicdn.com/tfs/TB1x7TyENYaK1RjSZFnXXa80pXa-502-380.jpg_240x240q90.jpg"/>
          </div>
        </Col>
        <Col span={6}>
          <div style={{ width: '90%' , height: 200 ,margin:'0 auto'}}>
            <img style={{height:200,width:'100%'}} src="https://img.alicdn.com/tfs/TB1jq1HekvoK1RjSZPfXXXPKFXa-502-380.jpg_240x240q90.jpg"/>
          </div>
        </Col>
        <Col span={6}>
        <div style={{ width: '90%' , height: 200 ,margin:'0 auto'}}>
            <img style={{height:200,width:'100%'}} src="https://img.alicdn.com/tfs/TB1NASFejDpK1RjSZFrXXa78VXa-502-380.jpg_240x240q90.jpg"/>
          </div>
        </Col>
        <Col span={6}>
        <div style={{ width: '90%' , height: 200 ,margin:'0 auto'}}>
            <img style={{height:200,width:'100%'}} src="https://img.alicdn.com/tfs/TB1gujqEFzqK1RjSZSgXXcpAVXa-502-380.jpg_240x240q90.jpg"/>
          </div>
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
          image='https://img.alicdn.com/bao/uploaded/i2/1133257609/TB2MVsCw4SYBuNjSsphXXbGvVXa_!!1133257609.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='2'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='3'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='4'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='5'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='6'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='7'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
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
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='2'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='3'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='4'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='5'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='6'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='7'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
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
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='2'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='3'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='4'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='5'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='6'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='7'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
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
