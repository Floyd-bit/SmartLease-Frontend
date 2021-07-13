import React, { useEffect, useState } from 'react';
import styles from './index.css';
import { Row, Col, Divider, Card, Carousel, Button } from 'antd';
import Product from '../components/Product';
import ItemCard from '@/components/ItemCard';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import HomeFooter from '@/components/HomeFooter';
import ProductSelect from '@/components/productSelect/productSelect';
import { getHotList, getLatestList } from './service';

function goLogin() {
  window.location.href = 'login'
}

function goRegister() {
  window.location.href = 'register'
}

const product = [
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
];

export default function() {
  const[hotList,setHotList]=useState([{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},]);
  const[latestList,setLatestList]=useState([{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},{image:null,title:'商品名称',price:'9999.99',oldprice:'9999.99',id:'1'},]);
  const [isInit, setIsInit] = useState(true);

  if (isInit) setIsInit(false);
  useEffect(() => {
    getHotList().then((res) => setHotList(res.data));
    getLatestList().then((res) => setLatestList(res.data));
  }, [isInit]);

  return (
    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }} align="bottom" style={{ width: '100%' }}>
        <Col span={4}>
          <ProductSelect product={product} />
        </Col>
        <Col span={10}>
          <Carousel autoplay>
            <div>
              <a href="">
                <img
                  style={{ height: 400, width: '100%' }}
                  src="https://img.alicdn.com/imgextra/i3/6000000000038/O1CN01A0E2931C9Rk0yD9R8_!!6000000000038-0-octopus.jpg"
                />
              </a>
            </div>
            <div>
              <a href="">
                <img
                  style={{ height: 400, width: '100%' }}
                  src="https://a1.alicdn.com/assets/p4p-fallback/mm_12852562_1778064_13670999.jpg"
                />
              </a>
            </div>
            <div>
              <a href="">
                <img
                  style={{ height: 400, width: '100%' }}
                  src="https://a1.alicdn.com/assets/p4p-fallback/mm_12852562_1778064_13674396.jpg"
                />
              </a>
            </div>
            <div>
              <a href="">
                <img
                  style={{ height: 400, width: '100%' }}
                  src="https://a1.alicdn.com/assets/p4p-fallback/mm_12852562_1778064_13672849.jpg"
                />
              </a>
            </div>
          </Carousel>
        </Col>
        <Col span={6}>
          <div style={{ height: 130, marginBottom: 5 }}>
            <Carousel autoplay>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
                />
              </div>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"
                />
              </div>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340"
                />
              </div>
            </Carousel>
          </div>
          <div style={{ height: 130, marginBottom: 5 }}>
            <Carousel autoplay>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"
                />
              </div>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340"
                />
              </div>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
                />
              </div>
            </Carousel>
          </div>
          <div style={{ height: 130 }}>
            <Carousel autoplay>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340"
                />
              </div>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
                />
              </div>
              <div>
                <img
                  style={{ height: 130, width: '100%' }}
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"
                />
              </div>
            </Carousel>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ width: '100%' , height: '190'}}>
            <Card>
              <div style={{ marginLeft: '50px' }}>
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  src="https://img0.baidu.com/it/u=493108106,1771945000&fm=26&fmt=auto&gp=0.jpg"
                />
                <h2>Hi! 下午好</h2>
              </div>
              <div style={{ marginLeft: '25px' }}>
                <Button onClick={goLogin}>登录</Button>
                <Button onClick={goRegister}>注册</Button>
              </div>
            </Card>
          </div>
          <div style={{ width: '100%', height: 200, marginTop: 10 }}>
            <img
              style={{ height: 200, width: '100%' }}
              src="https://img.alicdn.com/tfs/TB1x7TyENYaK1RjSZFnXXa80pXa-502-380.jpg_240x240q90.jpg"
            />
          </div>
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col span={6}>
          <div style={{ width: '90%', height: 200, margin: '0 auto' }}>
            <img
              style={{ height: 200, width: '100%' }}
              src="https://img.alicdn.com/tfs/TB1x7TyENYaK1RjSZFnXXa80pXa-502-380.jpg_240x240q90.jpg"
            />
          </div>
        </Col>
        <Col span={6}>
          <div style={{ width: '90%', height: 200, margin: '0 auto' }}>
            <img
              style={{ height: 200, width: '100%' }}
              src="https://img.alicdn.com/tfs/TB1jq1HekvoK1RjSZPfXXXPKFXa-502-380.jpg_240x240q90.jpg"
            />
          </div>
        </Col>
        <Col span={6}>
          <div style={{ width: '90%', height: 200, margin: '0 auto' }}>
            <img
              style={{ height: 200, width: '100%' }}
              src="https://img.alicdn.com/tfs/TB1NASFejDpK1RjSZFrXXa78VXa-502-380.jpg_240x240q90.jpg"
            />
          </div>
        </Col>
        <Col span={6}>
          <div style={{ width: '90%', height: 200, margin: '0 auto' }}>
            <img
              style={{ height: 200, width: '100%' }}
              src="https://img.alicdn.com/tfs/TB1gujqEFzqK1RjSZSgXXcpAVXa-502-380.jpg_240x240q90.jpg"
            />
          </div>
        </Col>
      </Row>
      <Divider />
      <Row>
        <h1 style={{ marginLeft: '0.625%' }}>热销产品</h1>
      </Row>
      <Row>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={hotList[0].image}
          title={hotList[0].title} price={hotList[0].price} oldprice={hotList[0].oldprice} id={hotList[0].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={hotList[1].image}
          title={hotList[1].title} price={hotList[1].price} oldprice={hotList[1].oldprice} id={hotList[1].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={hotList[2].image}
          title={hotList[2].title} price={hotList[2].price} oldprice={hotList[2].oldprice} id={hotList[2].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={hotList[3].image}
          title={hotList[3].title} price={hotList[3].price} oldprice={hotList[3].oldprice} id={hotList[3].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={hotList[4].image}
          title={hotList[4].title} price={hotList[4].price} oldprice={hotList[4].oldprice} id={hotList[4].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={hotList[5].image}
          title={hotList[5].title} price={hotList[5].price} oldprice={hotList[5].oldprice} id={hotList[5].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={hotList[6].image}
          title={hotList[6].title} price={hotList[6].price} oldprice={hotList[6].oldprice} id={hotList[6].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={hotList[7].image}
          title={hotList[7].title} price={hotList[7].price} oldprice={hotList[7].oldprice} id={hotList[7].id}/>
        </Col>
      </Row>
      <Divider />
      <Row>
        <h1 style={{ marginLeft: '0.625%' }}>最近上新</h1>
      </Row>
      <Row style={{}}>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={latestList[0].image}
          title={latestList[0].title} price={latestList[0].price} oldprice={latestList[0].oldprice} id={latestList[0].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={latestList[1].image}
          title={latestList[1].title} price={latestList[1].price} oldprice={latestList[1].oldprice} id={latestList[1].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={latestList[2].image}
          title={latestList[2].title} price={latestList[2].price} oldprice={latestList[2].oldprice} id={latestList[2].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={latestList[3].image}
          title={latestList[3].title} price={latestList[3].price} oldprice={latestList[3].oldprice} id={latestList[3].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={latestList[4].image}
          title={latestList[4].title} price={latestList[4].price} oldprice={latestList[4].oldprice} id={latestList[4].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={latestList[5].image}
          title={latestList[5].title} price={latestList[5].price} oldprice={latestList[5].oldprice} id={latestList[5].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={latestList[6].image}
          title={latestList[6].title} price={latestList[6].price} oldprice={latestList[6].oldprice} id={latestList[6].id}/>
        </Col>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image={latestList[7].image}
          title={latestList[7].title} price={latestList[7].price} oldprice={latestList[7].oldprice} id={latestList[7].id}/>
        </Col>
      </Row>
      <Divider />
      {/* <Row>
        <h1 style={{marginLeft:'0.625%'}}>分类名称</h1>
      </Row>
      <Row>
        <Col span={3}>
          <ItemCard length={document.body.scrollWidth*0.1125}
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='1'/>
        </Col>
        <Col span={3}>
        <ItemCard length={document.body.scrollWidth*0.1125}
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='2'/>
        </Col>
        <Col span={3}>
        <ItemCard length={document.body.scrollWidth*0.1125}
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='3'/>
        </Col>
        <Col span={3}>
        <ItemCard length={document.body.scrollWidth*0.1125}
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='4'/>
        </Col>
        <Col span={3}>
        <ItemCard length={document.body.scrollWidth*0.1125}
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='5'/>
        </Col>
        <Col span={3}>
        <ItemCard length={document.body.scrollWidth*0.1125}
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='6'/>
        </Col>
        <Col span={3}>
        <ItemCard length={document.body.scrollWidth*0.1125}
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='7'/>
        </Col>
        <Col span={3}>
        <ItemCard length={document.body.scrollWidth*0.1125}
          image='https://img.alicdn.com/imgextra/i4/1648030169/O1CN01qu4IGv1D7Rbh6cvc5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp'
          title='商品名称' price='9999.99' oldprice='9999.99' id='8'/>
        </Col>
      </Row>
      <Divider/> */}
      <HomeFooter/>

    </div>
  );
}
