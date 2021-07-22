/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 11:23:22
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 17:12:09
 */
import React, { useEffect, useState } from 'react';
import SiderMenu from '@/components/SiderMenu';
import { Row, Col, Card, Avatar, Button, Divider } from 'antd';
import {
  CarOutlined,
  CiCircleOutlined,
  CreditCardOutlined,
  HistoryOutlined,
  OneToOneOutlined,
  RotateLeftOutlined,
  SearchOutlined,
  TransactionOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ShoppingCarItem from '@/components/ShoppingCarItem';
import ItemCard from '@/components/ItemCard';
import GetUserId from '@/utils/GetUserId';
import { getOrderOnlyTwo, getRecommendProduct } from '../service';

const gridStyle = {
  width: '16.66666%',
  textAlign: 'center',
};

function User() {
  const getData = () => {
    getRecommendProduct().then(
      res => setRecommendList(res.data.value.slice(0, 9))
    )
  }
  const [recommendList, setRecommendList] = useState<any>([]);
  const [orderList, setOrderList] = useState<any>([]);
  useEffect(() => {
    getData();
    getOrderOnlyTwo().then(
      res => {
        setOrderList(res.data.value.records);
      }
    )
  }
    , [])
  return (
    <Row justify="space-around" align="top">
      <Col span={5}>
        <SiderMenu selectedKey="sub1" />
      </Col>
      <Col span={15} style={{ marginTop: '30px', width: 900 }}>
        <Card>
          <Card.Grid style={gridStyle}>
            <div>
              <Button type="primary" shape="circle" icon={<TransactionOutlined />} />
            </div>
            <div>待付款</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <div>
              <Button type="primary" shape="circle" icon={<CreditCardOutlined />} />
            </div>
            <div>待发货</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <div>
              <Button type="primary" shape="circle" icon={<CarOutlined />} />
            </div>
            <div>待收货</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <div>
              <Button type="primary" shape="circle" icon={<OneToOneOutlined />} />
            </div>
            <div>使用中</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <div>
              <Button type="primary" shape="circle" icon={<TransactionOutlined />} />
            </div>
            <div>已退还</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <div>
              <Button type="primary" shape="circle" icon={<RotateLeftOutlined />} />
            </div>
            <div>退款/售后</div>
          </Card.Grid>
        </Card>
        <Card
          title="我的订单"
          style={{ width: 900, marginTop: 20 }}
          extra={<a href="#">全部订单</a>}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
              orderList.length === 0 ? <div>暂无订单哦
              </div> : (
                <>
                  <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                      商品图片
               </div>
                    <div style={{ flex: 1 }}>
                      商品名称
               </div>
                    <div style={{ flex: 1 }}>
                      价格
               </div>
                    <div style={{ flex: 1 }}>
                      数量
               </div>
                    <div style={{ flex: 1 }}>
                      租期
               </div>
                  </div>
                  {
                    orderList.map(
                      item => {
                        <div style={{ display: 'flex' }}>
                          <div>
                            <img src={item.subImages}></img>
                          </div>
                          <div>
                            <img src={item.subImages}></img>
                          </div>
                          <div>
                            <img src={item.subImages}></img>
                          </div>
                          <div>
                            <img src={item.subImages}></img>
                          </div>
                          <div>
                            <img src={item.subImages}></img>
                          </div>
                          <div>
                            <img src={item.subImages}></img>
                          </div>
                        </div>
                      }
                    )
                  }

                </>)
            }

          </div>
        </Card>
        <Card
          title="根据浏览，猜你喜欢"
          style={{ width: 900, marginTop: 20 }}
          extra={<Button onClick={getData}>换一组</Button>}
        >
          <Row gutter={[24, 16]}>
            {
              recommendList.map((item) => {
                return (
                  <Col span={8}>
                    <ItemCard
                      image={item.subImages}
                      title={item.commodityName}
                      price={item.rentPrice}
                      guaranteePrice={item.guaranteePrice}
                      id={item.id}
                    />
                  </Col>
                )
              })
            }

          </Row>
        </Card>
      </Col>
      <Col span={4}>
        <div>
          <Card>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                style={{ background: '#1890ff' }}
                icon={<UserOutlined />}
              />
              <h2>Hi! 下午好</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              您是我们的第{GetUserId()}位用户
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default User;
