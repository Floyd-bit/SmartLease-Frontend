/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 10:23:04
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 20:09:57
 */
import React, { useEffect, useState } from 'react';
import ShoppingCarItem from '@/components/ShoppingCarItem';
import SiderMenu from '@/components/SiderMenu';
import { Button, Col, message, Popconfirm, Row, Skeleton } from 'antd';
import { Link, history } from 'umi';
import { getShoppingCart, getProductById, deleteShoppingCart } from './service';

function ShoppingCar() {
  const [isInit,setIsInit]=useState(true);
  const [loading,setLoading]=useState(false)
  const [shoppingCartList, setShoppingCartList] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  const [subComponentDeleteFlag, setFlag] = useState<boolean>(false);
  const handleDelete=()=>{
    deleteShoppingCart().then((res)=>{if(res.message==='删除成功'){message.success('清空成功');setFlag(!subComponentDeleteFlag)}})
  }
  const handleSubmit=()=>{
    if(shoppingCartList.length===0){
      message.warning('请先添加物品到购物车')
    }
    else{
      history.push('/createorder')
    }
  }

  useEffect(() => {
    if(isInit){
      setLoading(true);
    }
    let data = {
      pageNum: 1,
      pageSize: 1000,
    };
    getShoppingCart(data).then((res) => {
      if (res.data.value.records.length === 0) {
        message.info('目前购物车为空');
        setShoppingCartList([]);
        setLoading(false);
      } else {
        let shoppingList: any[] = [];
        let length = res.data.value.records.length;
        res.data.value.records.forEach((items: any) => {
          getProductById(items.commodityIds["100"]).then((res) => {
            if(res.data.value){
              let item = res.data.value;
              item.rentNum = items.commodityIds["200"];
              item.rentTime = items.commodityIds["300"];
              item.shoppingCartId = items.id;
              item.data=items.commodityIds;
              let options=JSON.parse(res.data.value.attribute.options);
              item.selection=(items.commodityIds["400"]===-1?"":options[0].title+":"+options[0].values[items.commodityIds["400"]]+" ")+(items.commodityIds["500"]===-1?"":options[1].title+":"+options[1].values[items.commodityIds["500"]]);
              shoppingList.push(item);
              if (shoppingList.length === length) {
                setShoppingCartList(shoppingList);
                let total = 0;
                shoppingList.forEach((item) => {
                  total =
                    total + Number((Number(item.guaranteePrice)*Number(item.rentNum) + Number(item.rentPrice)*Number(item.rentNum)*Number(item.rentTime)).toFixed(2));
                });
                setTotal(total);
                setIsInit(false);
                setLoading(false);
              }
            }else{
              length=length-1;
              if (shoppingList.length === length) {
                setShoppingCartList(shoppingList);
                let total = 0;
                shoppingList.forEach((item) => {
                  total =
                    total + Number((Number(item.guaranteePrice)*Number(item.rentNum) + Number(item.rentPrice)*Number(item.rentNum)*Number(item.rentTime)).toFixed(2));
                });
                setTotal(total);
                setIsInit(false);
                setLoading(false);
              }
            }
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
          <Skeleton active loading={loading}>
          {shoppingCartList.map((item: any) => (
            <ShoppingCarItem
              id={item.shoppingCartId}
              number={item.rentNum}
              productName={item.commodityName}
              price={item.rentPrice}
              guaranteePrice={item.guaranteePrice}
              src={item.subImages}
              time={item.rentTime}
              setValue={setTotal}
              total={total}
              delete={setFlag}
              deleteflag={subComponentDeleteFlag}
              selection={item.selection}
              key={item.shoppingCartId}
              commodityId={item.id}
              data={item.data}
            />
          ))}
          </Skeleton>
          <div style={{ width: '100%', backgroundColor: '#C6DCF9', height: '50px' }}>
            <Row>
              <Col span={16}></Col>
              <Col span={3} style={{ marginTop: '13px' }}>
                合计：￥{total.toFixed(2)}
              </Col>
              <Col span={3} offset={2} style={{ marginTop: '5px' }}>
                <Popconfirm title="确定要清空购物车吗？" placement={'bottomRight'} onConfirm={handleDelete} okText="确定" cancelText="取消">
                  <Button type="primary" danger size="large">
                    清空
                  </Button>
                </Popconfirm>
                <Button type="primary" size="large" onClick={handleSubmit}>
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
