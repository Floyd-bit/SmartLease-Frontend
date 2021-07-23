/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 11:23:22
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-23 12:52:06
 */
import React, { useEffect, useState } from 'react';
import SiderMenu from '@/components/SiderMenu';
import { Row, Col, Card, Avatar, Button, Divider, Skeleton } from 'antd';
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
import { getOrderItemById, getOrderOnlyTwo, getProductById, getRecommendProduct } from '../service';
import { Link } from 'react-router-dom';

const gridStyle = {
  width: '16.66666%',
  textAlign: 'center',
};

function User() {
  const [loading,setLoading]=useState(false)
  const getData = () => {
    getRecommendProduct().then(
      res => setRecommendList(res.data.value.slice(0, 9))
    )
  }
  const [recommendList, setRecommendList] = useState<any>([]);
  const [ItemList, setItemList] = useState<any>([]);
  useEffect(() => {
    getData();
    setLoading(true);
    getOrderOnlyTwo().then(
      res => {
        if(res.data.value.records.length==0){
          setItemList([]);
          setLoading(false);
        }
        else{
          let shoppingList: any[] = [];
          let length = res.data.value.records[0].orderItemIds.length;
          res.data.value.records[0].orderItemIds.forEach((orderItemId:any)=>{
            getOrderItemById(orderItemId).then((res1)=>{
              getProductById(res1.data.value.commodityId).then((res)=>{
                if(res.data.value){
                  let item = res.data.value;
                  item.rentNum = res1.data.value.number;
                  item.rentTime = res1.data.value.rentDays;
                  item.selection= res1.data.value.uniform.selection;
                  item.total=res1.data.value.transportPrice;
                  shoppingList.push(item);
                  if (shoppingList.length === length) {
                    setItemList(shoppingList);
                  }
                }else{
                  length=length-1;
                  if (shoppingList.length === length) {
                    setItemList(shoppingList);
                  }
                }
                setLoading(false);
              })
            })
          })
        }
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
          extra={<Link to={'/user/orderlist'}>全部订单</Link>}
        >
          <Skeleton active loading={loading}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
              ItemList.length === 0 ? <div>暂无订单哦
              </div> : (
                <>
                  <div style={{ display: 'flex' }}>
                    <div style={{ width:'20%',textAlign:'center' }}>
                      图片
               </div>
                    <div style={{ width:'40%',textAlign:'center' }}>
                      商品
               </div>
                    <div style={{ width:'20%',textAlign:'center' }}>
                      价格
               </div>
                    <div style={{ width:'10%',textAlign:'center' }}>
                      数量
               </div>
                    <div style={{ width:'10%',textAlign:'center' }}>
                      租期
               </div>
                  </div>
                  {
                    ItemList.map(
                      (item:any) => {
                        return(
                          <div style={{ display: 'flex',marginTop:20}}>
                            <div style={{ width:'20%',textAlign:'center' }}>
                              <img src={item.subImages} style={{width:'150px',height:'150px'}}></img>
                            </div>
                            <div style={{ width:'40%',display:'flex',justifyContent:'center' }}>
                              <div style={{ width:'80%',textAlign:'left' }}><Link to={'/detail?id='+item.id} style={{color:'black'}}>{item.commodityName}<br/><br/>{item.selection}</Link></div>
                            </div>
                            <div style={{ width:'20%',textAlign:'center' }}>
                              ￥{item.rentPrice}/天+押金￥{item.guaranteePrice}
                            </div>
                            <div style={{ width:'10%',textAlign:'center' }}>
                              {item.rentNum}
                            </div>
                            <div style={{ width:'10%',textAlign:'center' }}>
                              {item.rentTime}天
                            </div>
                          </div>
                        )
                      }
                    )
                  }

                </>)
            }

          </div>
          </Skeleton>
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
