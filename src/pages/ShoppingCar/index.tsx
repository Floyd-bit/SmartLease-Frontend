/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 10:23:04
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 14:15:18
 */
import React, { useEffect, useState } from 'react';
import ShoppingCarItem from '@/components/ShoppingCarItem';
import SiderMenu from '@/components/SiderMenu';
import { Button, Col, message, Row } from 'antd';
import { getShoppingCart, getProductById, deleteShoppingCart } from './service';

function ShoppingCar() {
  const [shoppingCartList, setShoppingCartList] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  const [subComponentDeleteFlag, setFlag] = useState<boolean>(false);
  useEffect(() => {
    let data = {
      pageNum: 1,
      pageSize: 10,
    };
    getShoppingCart(data).then((res) => {
      if (res.data.value.records.length === 0) {
        message.info('目前购物车为空');
        setShoppingCartList([]);
      } else {
        let shoppingList: any[] = [];
        let length = res.data.value.records.length;
        res.data.value.records.forEach((items: any) => {
          Object.keys(items.commodityIds).forEach((subItem) => {
            getProductById(subItem).then((res) => {
              let item = res.data.value;
              item.rentNum = items.commodityIds[subItem];
              item.shoppingCartId = items.id;
              shoppingList.push(item);
              if (shoppingList.length === length) {
                setShoppingCartList(shoppingList);
                let total = 0;
                shoppingList.forEach((item) => {
                  total =
                    total + Number((Number(item.rentNum) + Number(item.rentPrice)).toFixed(2));
                });
                setTotal(total);
              }
            });
          });
        });
      }
    });
  }, [subComponentDeleteFlag]);
  return (
    <Row justify="space-around" align="top">
      <Col span={2}>
        <SiderMenu selectedKey="5" />
      </Col>
      <Col span={20} offset={2}>
        <div style={{ width: '100%' }}>
          <div
            style={{
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#C6DCF9',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
              }}
            >
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>图片</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>商品</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>价格</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>数量</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>租期(天)</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>小计</div>
              <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>操作</div>
            </div>
          </div>
          {shoppingCartList.map((item: any) => (
            <ShoppingCarItem
              gmtCreate="2020/7/8"
              id={item.shoppingCartId}
              receiver="syx"
              phone="12345678"
              number={item.rentNum}
              productName={item.commodityName}
              color="红色"
              size="32G"
              price={item.rentPrice}
              src={item.subImages}
              name="商品"
              count={2}
              payment={true}
              time={1}
              setValue={setTotal}
              total={total}
              delete={setFlag}
              deleteflag={subComponentDeleteFlag}
            />
          ))}

          <div style={{ width: '100%', backgroundColor: '#C6DCF9', height: '50px' }}>
            <Row>
              <Col span={16}></Col>
              <Col span={3} style={{ marginTop: '13px' }}>
                合计：￥{total}
              </Col>
              <Col span={3} offset={2} style={{ marginTop: '5px' }}>
                <Button type="primary" danger size="large" onClick={deleteShoppingCart}>
                  清空
                </Button>
                <Button type="primary" size="large">
                  结算
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ShoppingCar;
