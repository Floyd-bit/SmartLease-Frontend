/*
 * @Descripttion:
 * @version:
 * @Author: 赵卓轩
 * @Date: 2021-07-07 08:47:04
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 16:31:44
 */
import React, { useEffect, useState } from 'react';
import { Row, Col, Divider, Card, Carousel, Button } from 'antd';
import ItemCard from '@/components/ItemCard';
import Avatar from 'antd/lib/avatar/avatar';
import HomeFooter from '@/components/HomeFooter';
import ProductSelect from '@/components/productSelect/productSelect';
import { getHotList, getLatestList, getAllProductType, showCommodityListByTime } from './service';
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';
import { UserOutlined } from '@ant-design/icons';
import { ProFormColorPicker } from '@ant-design/pro-form';

function goLogin() {
  window.location.href = 'login';
}

function goRegister() {
  window.location.href = 'register';
}

function getUserId()
{
  var name = "userId=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

function UserInfo(){
  console.log(getUserId())
  if(getUserId()!=""&&getUserId()!="null"){
    return(
      <Card>
        <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column' }}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            style={{background:'#1890ff'}}
            icon={<UserOutlined/>}
          />
          <h2>Hi! 下午好</h2>
        </div>
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', }}>
          您是我们的第{getUserId()}位用户
        </div>
      </Card>
    )
  }
  else{
    return(
      <Card>
        <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column' }}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<UserOutlined/>}
          />
          <h2>Hi! 下午好</h2>
        </div>
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', }}>
          <Button onClick={goLogin} style={{marginRight:5}}>登录</Button>
          <Button onClick={goRegister} style={{marginLeft:5}}>注册</Button>
        </div>
      </Card>
    )
  }
}

export default function () {


  const [timeList, setTimeList] = useState<any>([]);
  const [hotList, setHotList] = useState<any>([]);
  useEffect(() => {
    showCommodityListByTime({ pageNum: 1, pageSize: 8 }).then(res =>
      setTimeList(res.data.value.records),
    );
    showCommodityListByTime({ pageNum: 4, pageSize: 8 }).then(res =>
      setHotList(res.data.value.records),
    );
  }, []);
  return (
    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }} align="bottom" style={{ width: '100%' }}>
        <Col span={3}>
          <div style={{ height: 400, width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                height: 50,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                color: '#00CCFF',
              }}
            >
              <a href="/itemlist" style={{ color: '#00CCFF' }}>
                主题市场
              </a>
            </div>
            <div
              style={{
                height: 70,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px #c0c0c0',
                borderStyle: 'none none solid',
              }}
            >
              <div style={{ width: 32, height: 32, marginRight: 10 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="100%"
                  height="100%"
                  style={{ fill: 'rgb(85, 146, 255)' }}
                >
                  <path d="M31.872 21.216c-0.736-4.256-4.512-7.456-8.864-7.488-2.336-0.032-4.672-0.032-6.976-0.032-2.112 0-4.192-0.032-6.272 0.032-0.896 0-1.856 0.032-2.752 0.224-6.752 1.632-9.28 9.888-4.64 15.040 1.792 1.952 4.064 2.976 6.752 3.008h12.288c1.312 0 2.624 0.032 3.904-0.32 3.898-1.134 6.699-4.674 6.699-8.869 0-0.564-0.051-1.116-0.148-1.651l0.008 0.056zM12.544 23.968h-3.36v3.424h-2.304v-3.392h-3.424v-2.272h3.392v-3.424h2.304v3.392h3.392v2.272zM20 28.288c-1.408 0-2.56-1.184-2.56-2.592 0-1.376 1.184-2.56 2.528-2.56 1.44 0 2.624 1.152 2.624 2.56s-1.184 2.592-2.592 2.592zM25.728 23.712c-1.44-0.032-2.592-1.184-2.592-2.592 0.032-1.408 1.184-2.56 2.592-2.56s2.56 1.184 2.56 2.624c0 1.344-1.184 2.528-2.56 2.528zM10.784 5.696h11.776c0.096 0 0.192 0.032 0.288 0.032v2.272h-6.816c-0.736 0-1.056 0.288-1.152 0.992-0.032 0.288 0 0.576 0 0.864-0.032 0.896 0 1.792 0 2.688h3.424v-1.12h5.92c1.024 0 2.048-0.96 2.048-1.92 0.032-1.824 0.032-3.648 0.032-5.472 0-0.544-0.256-0.928-0.64-1.248-0.512-0.416-1.088-0.512-1.728-0.512h-11.36v-2.272h-3.424c0 1.44-0.032 2.88 0.032 4.288 0.032 0.896 0.704 1.408 1.6 1.408z"></path>
                </svg>
              </div>
              <div style={{ marginLeft: 10, fontSize: 16 }}>
                <a href="/itemlist?type=1" style={{ color: 'black' }}>
                  游戏装备
                </a>
              </div>
            </div>
            <div
              style={{
                height: 70,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px #c0c0c0',
                borderStyle: 'none none solid',
              }}
            >
              <div style={{ width: 32, height: 32, marginRight: 10 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="100%"
                  height="100%"
                  style={{ fill: 'rgb(85, 146, 255)' }}
                >
                  <path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"></path>
                </svg>
              </div>
              <div style={{ marginLeft: 10, fontSize: 16 }}>
                <a href="/itemlist?type=2" style={{ color: 'black' }}>
                  数码摄影
                </a>
              </div>
            </div>
            <div
              style={{
                height: 70,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px #c0c0c0',
                borderStyle: 'none none solid',
              }}
            >
              <div style={{ width: 32, height: 32, marginRight: 10 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                  style={{ fill: 'rgb(85, 146, 255)' }}
                >
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"></path>
                </svg>
              </div>
              <div style={{ marginLeft: 10, fontSize: 16 }}>
                <a href="/itemlist?type=3" style={{ color: 'black' }}>
                  电脑办公
                </a>
              </div>
            </div>
            <div
              style={{
                height: 70,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px #c0c0c0',
                borderStyle: 'none none solid',
              }}
            >
              <div style={{ width: 32, height: 32, marginRight: 10 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="64 64 896 896"
                  width="100%"
                  height="100%"
                  style={{ fill: 'rgb(85, 146, 255)' }}
                >
                  <path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
                </svg>
              </div>
              <div style={{ marginLeft: 10, fontSize: 16 }}>
                <a href="/itemlist?type=4" style={{ color: 'black' }}>
                  精品手机
                </a>
              </div>
            </div>
            <div
              style={{
                height: 70,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px #c0c0c0',
                borderStyle: 'none none solid',
              }}
            >
              <div style={{ width: 32, height: 32, marginRight: 10 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="100%"
                  height="100%"
                  style={{ fill: 'rgb(85, 146, 255)' }}
                >
                  <path d="M30.784 9.184h-3.008v-4.864c0-0.768-0.384-1.12-1.152-1.12h-21.184c-0.256 0-0.512 0-0.736 0.128-0.352 0.224-0.48 0.544-0.48 0.96v4.896h-3.008c-0.672 0-1.216 0.544-1.216 1.216v17.152c0 0.704 0.544 1.248 1.216 1.248h29.568c0.672 0 1.216-0.544 1.216-1.248v-17.152c0-0.672-0.544-1.216-1.216-1.216zM27.84 20.352c-0.032 1.376-1.152 2.464-2.528 2.464s-2.464-1.152-2.432-2.56c0-1.312 1.152-2.432 2.496-2.4 1.376 0.032 2.464 1.12 2.464 2.496zM18.144 19.936c0 0.224-0.064 0.288-0.288 0.288-0.558-0.015-1.214-0.024-1.872-0.024s-1.315 0.009-1.969 0.026l0.097-0.002c-0.224 0-0.256-0.096-0.256-0.32v-4.096c0-0.192 0.032-0.288 0.256-0.288 0.558 0.015 1.214 0.024 1.872 0.024s1.315-0.009 1.969-0.026l-0.097 0.002c0.192 0 0.288 0.032 0.288 0.288v4.128zM9.152 20.352c-0.032 1.344-1.152 2.464-2.496 2.464-1.376 0-2.496-1.12-2.496-2.496s1.12-2.464 2.496-2.464c1.378 0.002 2.494 1.118 2.496 2.496v0zM6.24 5.536c0-0.256 0.096-0.32 0.32-0.32h18.848c0.256 0 0.352 0.064 0.352 0.352v3.616h-3.808v-0.896c0-0.544-0.448-1.024-0.992-1.024s-0.992 0.448-1.024 0.992v0.928h-2.912c0-0.288 0-0.576-0.032-0.864 0-0.608-0.416-1.024-0.96-1.056-0.576 0-1.024 0.448-1.024 1.056-0.015 0.13-0.024 0.28-0.024 0.432s0.009 0.302 0.026 0.45l-0.002-0.018h-2.944v-0.864c0-0.576-0.448-1.056-0.992-1.056-0.576 0-1.024 0.48-1.024 1.056v0.864h-3.808v-3.648z"></path>
                </svg>
              </div>
              <div style={{ marginLeft: 10, fontSize: 16 }}>
                <a href="/itemlist?type=5" style={{ color: 'black' }}>
                  娱乐影音
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col span={10}>
          <Carousel autoplay>
            <div>
              <a href="/itemlist">
                <img style={{ height: 400, width: '100%' }} src={banner} />
              </a>
            </div>
            <div>
              <a href="/itemlist">
                <img style={{ height: 400, width: '100%' }} src={banner2} />
              </a>
            </div>
          </Carousel>
        </Col>
        <Col span={6}>
          <div style={{ height: 130, marginBottom: 5 }}>
            <Carousel autoplay>
              <div>
                <img style={{ height: 130, width: '100%' }} src={banner3} />
              </div>
              <div>
                <img style={{ height: 130, width: '100%' }} src={banner3} />
              </div>
            </Carousel>
          </div>
          <div style={{ height: 130, marginBottom: 5 }}>
            <Carousel autoplay>
              <div>
                <img style={{ height: 130, width: '100%' }} src={banner4} />
              </div>
              <div>
                <img style={{ height: 130, width: '100%' }} src={banner4} />
              </div>
            </Carousel>
          </div>
          <div style={{ height: 130 }}>
            <Carousel autoplay>
              <div>
                <img style={{ height: 130, width: '100%' }} src={banner5} />
              </div>
              <div>
                <img style={{ height: 130, width: '100%' }} src={banner5} />
              </div>
            </Carousel>
          </div>
        </Col>
        <Col span={5}>
          <div style={{ width: '100%', height: '190' }}>
            <UserInfo/>
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
        {
          hotList.map(
            item => <Col span={3}>
              <ItemCard
                length={document.body.scrollWidth * 0.1125}
                image={item.subImages}
                title={item.commodityName}
                price={item.rentPrice}
                oldprice="100"
                id={item.id}
              />
            </Col>
          )
        }


      </Row>
      <Divider />
      <Row>
        <h1 style={{ marginLeft: '0.625%' }}>最近上新</h1>
      </Row>
      <Row>
        {timeList.map(
          (item: { subImages: string; commodityName: string; rentPrice: string; id: number }) => {
            return (
              <Col span={3}>
                <ItemCard
                  length={document.body.scrollWidth * 0.1125}
                  image={item.subImages}
                  title={item.commodityName}
                  price={item.rentPrice}
                  oldprice="100"
                  id={item.id}
                />
              </Col>
            );
          },
        )}
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
      <HomeFooter />
    </div>
  );
}
