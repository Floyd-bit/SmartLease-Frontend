/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-08 21:22:53
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 02:55:34
 */
import React, { useEffect, useState } from 'react';
import SiderMenu from '../../components/SiderMenu';
import { Row, Col, Button, Input, Pagination } from 'antd';
import OrderCard from '@/components/OrderCard';
import { SearchOutlined } from '@ant-design/icons';
import { getOrderList } from './service';

const { Search } = Input;

interface OrderCardProps {
  gmtCreate: string;//创建时间
  id: string; //订单号
  receiverAddressId:number;//收货地址id
  transportPrice:number;//订单总价
  status:string;//订单状态
  orderItemIds:Array<number>;
}

function OrderList(props:any) {
  const [total, setTotal] = useState(1);
  const [orderinfo, setOrderinfo] = useState<any>([]);
  useEffect(() => {
    getOrderList(1,5).then((res)=>{
      setTotal(res.data.value.total);
      setOrderinfo(res.data.value.records)
    })
  }, [])

  const refresh=()=>{
    getOrderList(1,5).then((res)=>{
      setTotal(res.data.value.total);
      setOrderinfo(res.data.value.records)
    })
  }

  const changePage = (page:any, pageSize:any) => {
    getOrderList(page,pageSize).then((res)=>{
      setTotal(res.data.value.total);
      setOrderinfo(res.data.value.records)
    })
  };
  const orders = orderinfo.map((order: OrderCardProps) => {
    return (
      <li key={order.id}>
        <OrderCard
          gmtCreate={order.gmtCreate}
          id={order.id}
          receiverAddressId={order.receiverAddressId}
          transportPrice={order.transportPrice}
          status={order.status}
          orderItemIds={order.orderItemIds}
          refresh  = {()=>refresh()}
        />
      </li>
    );
  });
  return (
    <>
      {/* <div
        style={{
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#C6DCF9',
          width: '100%',
          justifyContent: 'flex-start',
          textAlign: 'center',
        }}
      >
        <div style={{ width: '20%' }}>订单创建时间</div>
        <div style={{ width: '10%' }}>商品信息</div>
        <div style={{ width: '20%' }}></div>
        <div style={{ width: '10%' }}>实付款</div>
        <div style={{ width: '20%' }}>交易状态</div>
        <div style={{ width: '20%' }}>交易状态</div>
      </div> */}

      <div>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>{orders}</ul>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Pagination
          size="small"
          total={total}
          pageSize={5}
          showSizeChanger={false}
          onChange={changePage}
        />
      </div>
    </>
  );
}
function OrderListPage() {
  return (
    <>
      <Row justify="space-around" align="top">
        <Col span={2}>
          <SiderMenu selectedKey="6" />
        </Col>
        <Col span={20} offset={2}>
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
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '70%' }}>
              <div>全部订单</div>
              <div>待付款</div>
              <div>待发货</div>
              <div>待收货</div>
              <div>已收货</div>
              <div>使用中</div>
              <div>已退还</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '30%',
                alignItems: 'center',
              }}
            >
              <Search
                placeholder="商品名称/订单号/收货人"
                allowClear
                onSearch={() => {
                  console.log('search pressed');
                }}
                style={{ width: '80%' }}
                size="large"
              />
            </div>
          </div>
          <div
            style={{
              height: '80px',
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
              width: '100%',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <p style={{ width: '80%', margin: '0 auto' }}>
              温馨提示：近期有骗子通过技术手段冒充租享宝客服QQ或客服电话，以“资金冻结，免费赠品”等名义，诱骗用户上当。现提示您：如果遇到陌生人以租享宝名义向您索要手机验证码，或账号密码之类信息，请不要随意配合，谨防受骗致资金损失！如果您接到可疑电话或QQ信息，可联系在线客服。
            </p>
          </div>
          <OrderList />
        </Col>
      </Row>
    </>
  );
}

export default OrderListPage;
