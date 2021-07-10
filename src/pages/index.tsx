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
    <div style={{width:'90%',marginLeft:'auto',marginRight:'auto'}}>
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
          image='https://img.alicdn.com/bao/uploaded/i1/1054513392/O1CN01m0riU41ava377Ux9Z_!!1054513392.png_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='4'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i4/4890222452/O1CN01n4uiW81Tz3pCkFenq_!!4890222452.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='5'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i4/2399845384/O1CN01iiRkcM1pdv6os9HAM_!!0-item_pic.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='6'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i3/59270458/O1CN01yUxttR1FFo3chpEZl_!!59270458.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='7'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i3/72292063/O1CN01XcXCk31R6tiXT5ENa_!!0-item_pic.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='8'/>
        </Col>
      </Row>
      <Divider/>
      <Row >
        <h1 style={{marginLeft:'0.625%'}}>最近上新</h1>
      </Row>
      <Row style={{}}>
        <Col span={3}>
          <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i1/134213414/O1CN013s500G1b5eee9oZ7x_!!134213414.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i4/843970460/O1CN01aqicsp1FGip6MdWt2_!!0-item_pic.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='2'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i4/864127531/O1CN01yD873D25VFR23cFGV_!!864127531.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='3'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i1/814169495/TB2nlaeeqmWBuNjy1XaXXXCbXXa_!!814169495.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='4'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i4/2920691536/TB2EfugaHJmpuFjSZFwXXaE4VXa_!!2920691536.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='5'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i1/1898766194/O1CN014vA9fa1vctokE5jeY_!!0-item_pic.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='6'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i1/2051431638/O1CN01cNLIYV1NyFLaI6KtV_!!2051431638.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='7'/>
        </Col>
        <Col span={3}>
        <ItemCard
          image='https://img.alicdn.com/bao/uploaded/i2/675960670/O1CN01uCu9SQ1Gou0UngRrK_!!0-item_pic.jpg_200x200q90.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='8'/>
        </Col>
      </Row>
      <Divider/>
      {/* <Row>
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
      <Divider/> */}
      <Row>
        <Col span={6}/>
        <Col span={12} style={{display:'flex',alignItems:'center',justifyContent:'space-around'}} >
          <div style={{cursor:'pointer'}}>
            <div style={{width:50,height:50}}>
              <svg style={{width:'100%',height:'100%'}} t="1625899044879" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1393" width="200" height="200"><path d="M372.998 94a29.753 29.753 0 0 1 14.189 3.551l255.132 97.547 230.873-88.27a52.917 52.917 0 0 1 18.123-3.485l0.775-0.005c29.221 0 52.91 23.685 52.91 52.903v593.937c0 19.747-11 37.851-28.528 46.951L663.39 928.524c-8.761 7.655-21.815 10.153-33.53 4.072L372.774 799.122l-223.48 116.026a52.916 52.916 0 0 1-23.634 5.947l-0.749 0.006C95.69 921.1 72 897.415 72 868.197v-624.75c0-21.928 13.529-41.582 34.013-49.414L358.36 97.551a29.745 29.745 0 0 1 14.413-3.549z m-30.455 73.623l-210.732 80.57v608.644l210.732-109.408V167.623z m60.46-0.001v579.806l210.732 109.409V248.194l-210.732-80.572z m482.184-1.355l-211.38 80.818v608.643l211.38-109.742V166.267z m-572.009 305c5.324 15.375-2.63 32.135-17.794 37.792l-0.683 0.245-89.604 31.014c-15.607 5.402-32.64-2.87-38.043-18.476-5.323-15.376 2.63-32.135 17.794-37.792l0.684-0.246 89.603-31.013c15.608-5.402 32.64 2.87 38.043 18.475z m0-140.827c5.324 15.377-2.63 32.136-17.794 37.793l-0.683 0.246-89.604 31.013c-15.607 5.402-32.64-2.87-38.043-18.475-5.323-15.377 2.63-32.136 17.794-37.793l0.684-0.246 89.603-31.013c15.608-5.402 32.64 2.87 38.043 18.475z" fill="#333333" p-id="1394"></path></svg>
            </div>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>购物指南</p>
            </a>
          </div>
          <div style={{cursor:'pointer'}}>
            <div style={{width:50,height:50}}>
              <svg style={{width:'100%',height:'100%'}} t="1625899240276" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2459" width="200" height="200"><path d="M139.03 726.77H37.73c-6.77 0-13.27-2.69-18.06-7.48a25.523 25.523 0 0 1-7.48-18.05v-570.8c0-14.11 11.43-25.53 25.53-25.53H643.6c14.11 0 25.53 11.43 25.53 25.53v569.61c0 6.77-2.69 13.27-7.48 18.05a25.529 25.529 0 0 1-18.06 7.48H466.96c-14.1 0-25.53-11.43-25.53-25.53s11.43-25.53 25.53-25.53h151.12V155.98H63.28v519.7h75.75c14.11 0 25.55 11.43 25.55 25.54s-11.44 25.55-25.55 25.55z m0 0" fill="#333333" p-id="2460"></path><path d="M306.19 917.86c-74.55 0-135.2-60.65-135.2-135.2 0-74.55 60.65-135.2 135.2-135.2 74.55 0 135.21 60.64 135.21 135.2s-60.66 135.2-135.21 135.2z m0-219.32c-46.38 0-84.12 37.74-84.12 84.12s37.74 84.12 84.12 84.12 84.11-37.74 84.11-84.12-37.73-84.12-84.11-84.12z m513.98 219.32c-74.55 0-135.2-60.65-135.2-135.2 0-74.55 60.65-135.2 135.2-135.2 74.55 0 135.21 60.64 135.21 135.2s-60.66 135.2-135.21 135.2z m0-219.32c-46.39 0-84.12 37.74-84.12 84.12s37.73 84.12 84.12 84.12c46.38 0 84.11-37.74 84.11-84.12s-37.73-84.12-84.11-84.12z m165.96-17.56c-6.77 0-13.27-2.69-18.05-7.48a25.529 25.529 0 0 1-7.48-18.06v-191.4L808.08 278.01H659.94a25.55 25.55 0 0 1-22.12-12.77 25.538 25.538 0 1 1 22.12-38.31h160.23c7.65 0 14.9 3.44 19.76 9.34l165.96 202.44a25.577 25.577 0 0 1 5.79 16.2v200.54c-0.02 14.11-11.45 25.53-25.55 25.53z m0 0" fill="#333333" p-id="2461"></path><path d="M966.42 486.35H754.65c-9.12 0-17.55-4.86-22.11-12.77a25.534 25.534 0 0 1 22.11-38.3h211.78c14.11 0.01 25.53 11.44 25.53 25.54-0.01 14.1-11.44 25.54-25.54 25.53z m-828.19-124a25.539 25.539 0 0 1-23.62-15.76 25.529 25.529 0 0 1 5.55-27.84L231.1 207.81c9.97-9.98 26.15-9.98 36.12 0 9.97 9.97 9.97 26.14 0 36.12L156.29 354.86c-5 4.98-11.54 7.49-18.06 7.49z m36.14 135.76a25.519 25.519 0 0 1-23.61-15.77 25.51 25.51 0 0 1 5.55-27.84L369.8 241.01c9.97-9.97 26.15-9.97 36.12 0 9.97 9.98 9.97 26.15 0 36.12L192.43 490.62a25.521 25.521 0 0 1-18.06 7.49z m0 0" fill="#333333" p-id="2462"></path></svg>            </div>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>配送方式</p>
            </a>
          </div>
          <div style={{cursor:'pointer'}}>
            <div style={{width:50,height:50}}>
              <svg style={{width:'100%',height:'100%'}} t="1625899473592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8959" width="200" height="200"><path d="M800.896736 407.915433l-2.261507 0c-16.712637 0-30.429033 4.801353-43.639916 12.976546-11.561313-33.718963-40.968064-58.008158-78.842673-58.008158-16.71366 0-32.677237 4.801353-45.886073 12.976546-11.562337-33.716916-40.98239-58.008158-78.859046-58.008158-14.772448 0-28.500101 3.701299-40.651862 10.203386l0-86.7559c0-47.254234-35.742039-85.560678-83.338057-85.560678-47.599088 0-86.182848 38.306444-86.182848 85.560678L341.234755 573.463864l-52.357462-52.142567c-33.657564-33.412994-93.226265-28.655643-121.881908 0-28.656667 28.656667-47.450708 86.335321-6.415107 127.370923l240.682641 239.104703c4.965082 4.928243 10.42442 9.04091 16.165168 12.516058 43.883463 35.798321 94.167706 56.990992 200.49843 56.990992 242.907309 0 265.402649-131.048685 265.402649-292.705482L883.329167 493.475088C883.33019 446.221878 848.495824 407.915433 800.896736 407.915433L800.896736 407.915433zM837.967026 664.594397c0 136.787386-0.652869 247.673869-220.042555 247.673869-92.937692 0-148.734486-20.722974-191.003172-62.685691L199.068871 623.214964c-20.159132-20.159132-15.08865-45.934169 1.414209-62.437028 16.501836-16.502859 46.791699-17.073864 62.733786-1.24741 0 0 39.97648 39.740096 74.417897 73.977875 26.064632 25.910113 48.959062 48.670489 48.959062 48.670489L386.593825 250.305813c0-22.3838 18.278295-40.528042 40.824801-40.528042 22.544459 0 37.977963 18.145266 37.977963 40.528042l0 274.692223 0.457418 0c-0.297782 1.455141-0.457418 2.960425-0.457418 4.503571 0 12.43317 10.154267 22.515806 22.679535 22.515806 12.524245 0 22.678512-10.080589 22.678512-22.515806 0-1.543146-0.158612-3.048429-0.457418-4.503571l0.457418 0L510.754636 412.419004c0-22.3838 16.311501-40.529065 38.858006-40.529065 0 0 39.944757-0.540306 39.944757 40.529065l0 148.60248 0.457418 0c-0.297782 1.457188-0.457418 2.961448-0.457418 4.503571 0 12.435217 10.154267 22.51683 22.678512 22.51683 12.525268 0 22.679535-10.080589 22.679535-22.51683 0-1.542122-0.158612-3.047406-0.457418-4.503571l0.457418 0L634.915447 457.45164c0-22.384823 16.050558-40.531112 38.598086-40.531112 0 0 40.774659 2.538823 40.774659 40.531112l0 130.590244 0.457418 0c-0.297782 1.455141-0.457418 2.961448-0.457418 4.503571 0 12.435217 10.154267 22.515806 22.678512 22.515806 12.526291 0 22.110577-10.079566 22.110577-22.515806 0-1.542122-0.149403-3.048429-0.431835-4.503571l0.431835 0 0-89.161692c0-22.381753 16.819061-40.529065 39.364543-40.529065 0 0 39.525202-1.598404 39.525202 40.529065C837.967026 498.879168 837.967026 628.174929 837.967026 664.594397L837.967026 664.594397zM307.559794 368.868115l0-75.66633c-7.201006-16.141632-11.290137-33.974789-11.290137-52.792367 0-71.704089 58.126862-129.830951 129.830951-129.830951 71.703065 0 129.830951 58.126862 129.830951 129.830951 0 9.794064-1.157359 19.303648-3.235694 28.466332 16.32992 0.636496 31.063483 7.4159 41.788755 18.298761 4.157693-14.904455 6.604418-30.523177 6.604418-46.765093 0-96.642061-78.346369-174.989453-174.989453-174.989453-96.644107 0-174.989453 78.346369-174.989453 174.989453C251.111155 291.257503 272.930089 336.894913 307.559794 368.868115L307.559794 368.868115z" p-id="8960"></path></svg>
            </div>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>常见操作</p>
            </a>
          </div>
          <div style={{cursor:'pointer'}}>
            <div style={{width:50,height:50}}>
              <svg style={{width:'100%',height:'100%'}} t="1625899357006" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4587" width="200" height="200"><path d="M781.781698 111.626332c-95.80357-44.036407-212.884781-27.02152-291.890214 51.767163-71.961053 71.780428-92.443943 175.170253-62.171171 265.302194l-304.425598 303.703097c-45.011783 44.939533-45.011783 117.695336 0 162.63487s117.948211 44.939533 162.99612 0l304.353348-303.811473c90.384816 30.236647 193.955267 9.789882 265.916319-61.990545 78.824808-78.752558 95.189445-195.111268 51.153038-290.625838-14.23326 15.931137-37.822903 36.197277-71.527553 67.084174-35.763776 35.655401-86.374938 35.655401-122.247089 0-35.763776-35.691526-35.763776-86.194313 0-121.958089 32.946024-32.873774 68.34855-71.924928 67.8428-72.105553z m-285.315459 329.713116c-41.11028-76.223806-30.345022-172.930502 34.174275-237.269174 38.617653-38.617653 89.04819-56.933042 139.767727-57.547167-53.103789 56.318916-52.381288 144.752981 2.745502 199.807522 55.235165 55.05454 143.777605 55.777041 200.241022 2.853877-0.614125 50.538912-19.037889 100.788824-57.655543 139.406477-64.483172 64.338672-161.478868 75.10393-237.811049 33.99365l-332.458618 331.844493c-22.505891 22.397516-58.992168 22.397516-81.49806 0-22.505891-22.433641-22.505891-58.811543 0-81.317435l332.494744-331.772243z" fill="#231815" p-id="4588"></path></svg>
            </div>
            <a href=''>
              <p style={{ textAlign:'center',color:'black'}}>售后服务</p>
            </a>
          </div>
          <div style={{cursor:'pointer'}}>
            <div style={{width:50,height:50}}>
              <svg style={{width:'100%',height:'100%'}} t="1625899410584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6842" width="200" height="200"><path d="M804.11 800.97c-0.91 0-0.91-0.91-0.91-1.83v-0.9l-0.9-5.44c-11.8-102.52-78.92-189.62-173.29-229.53 55.34-37.2 88.91-99.81 88.91-167.85 0-111.59-91.64-203.22-203.22-203.22-56.25 0-104.33 19.96-144.25 59.87-39.01 39.02-58.96 87.1-58.96 143.34 0 68.04 34.47 130.65 88.9 167.85-93.44 39.01-158.77 125.2-173.28 225.9-0.91 1.81-0.91 3.63-0.91 5.44v7.26c0 14.52 11.8 29.03 29.03 29.03 15.42 0 29.03-13.61 29.03-29.03v-0.9C299.69 691.19 388.6 604.09 502 597.74c8.17 0.91 17.25 0.91 25.41 0 56.25 2.71 105.23 23.59 146.06 62.6 40.82 38.1 65.32 85.27 71.67 140.62h0.91v0.9c0 14.52 11.8 29.03 29.03 29.03 15.42 0 29.03-13.61 29.03-29.03l-0.91-0.9h0.91zM514.7 540.58c-78.92 0-145.16-66.23-145.16-145.16 0-40.82 14.51-74.39 42.64-102.51 28.12-28.12 62.6-42.64 102.51-42.64 39.92 0 74.39 14.52 102.52 42.64 28.12 28.12 42.64 61.7 42.64 102.51 0.01 79.85-65.31 145.16-145.15 145.16" p-id="6843"></path></svg>
            </div>
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
