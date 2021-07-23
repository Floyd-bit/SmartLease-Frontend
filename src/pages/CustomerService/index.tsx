import React from 'react';
import SiderMenu from '@/components/SiderMenu';
import { Button, Col, Row, Image } from 'antd';
import Fix from '@/assets/CustomerService.png';
import ServiceDetail from './ServiceDetail';
import { history } from 'umi';

const CustomerService: React.FC = () => {
  return (
    <Row>
      <Col span={2}>
        <SiderMenu></SiderMenu>
      </Col>
      <Col span={14} offset={4}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '40vh',
            border: '2px solid #D5D5D5',
            marginTop: '30px',
          }}
        >
          <div
            style={{
              flex: 1,
              borderRight: '2px solid #D5D5D5',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'column',
              paddingTop: '30px',
              paddingBottom: '30px',
            }}
          >
            <img src={Fix} width="60%"></img>
            <Button
              danger
              style={{
                borderRadius: '20px',
                backgroundColor: '#F0CDCD',
                textAlign: 'center',
                border: '1px solid red',
                color: 'red',
                width: '100px',
                height: '40px',
              }}
              onClick={() => history.push('/user/serviceapply')}
            >
              申请售后
            </Button>
          </div>
          <div
            style={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRight: '2px solid #D5D5D5',
            }}
          >
            <div style={{ flex: 4, display: 'flex' }}>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRight: '2px solid #D5D5D5',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                <div style={{ fontSize: '30px', color: '#9FA8AE' }}>0</div>
                <div style={{ fontSize: '25px' }}>处理中</div>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                <div style={{ fontSize: '30px', color: '#9FA8AE' }}>0</div>
                <div style={{ fontSize: '25px' }}>上门取件</div>
              </div>
            </div>
            <div
              style={{
                flex: 3,
                borderTop: '2px solid #D5D5D5',
                display: 'flex',
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  borderRight: '2px solid #D5D5D5',
                }}
              >
                <div style={{ fontSize: '30px', color: '#9FA8AE' }}>0</div>
                <div style={{ fontSize: '25px' }}>待邮寄</div>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  borderRight: '2px solid #D5D5D5',
                }}
              >
                <div style={{ fontSize: '30px', color: '#9FA8AE' }}>0</div>
                <div style={{ fontSize: '25px' }}>待评价</div>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                <div style={{ fontSize: '30px', color: '#9FA8AE' }}>0</div>
                <div style={{ fontSize: '25px' }}>待返还垫付款</div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '20px', margin: '20px' }}>公告</div>
            <div style={{ fontSize: '15px', margin: '20px' }}>
              <div>[新品上线] 618年终大促!</div>
              <div>[售后保证] 7天无理由退货!</div>
              <div style={{fontSize: 28, marginTop:20}}>全国客服热线</div>
              <div style={{color:"red",fontSize: 20, marginLeft: 15}}>4000-778-768</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', width: '100%', height: '60vh', marginTop: '50px' }}>
          <div
            style={{
              flex: 1,
              backgroundColor: '#5590FB',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60px',
              }}
            >
              服务申请
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#7CACFD',
                fontSize: '15px',
                height: '60px',
                color: 'white',
              }}
            >
              申请售后
            </div>
          </div>
          <div style={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  borderRight: '1px solid #D5D5D5',
                  borderTop: '1px solid #D5D5D5',
                }}
              >
                <ServiceDetail />
              </div>
              <div
                style={{
                  flex: 1,
                  borderRight: '1px solid #D5D5D5',
                  borderTop: '1px solid #D5D5D5',
                }}
              >
                
              </div>
              <div
                style={{
                  flex: 1,
                  borderRight: '1px solid #D5D5D5',
                  borderTop: '1px solid #D5D5D5',
                }}
              >
               
              </div>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  borderTop: '1px solid #D5D5D5',
                  borderBottom: '1px solid #D5D5D5',
                  borderRight: '1px solid #D5D5D5',
                }}
              >
                
              </div>
              <div
                style={{
                  flex: 1,
                  borderTop: '1px solid #D5D5D5',
                  borderBottom: '1px solid #D5D5D5',
                  borderRight: '1px solid #D5D5D5',
                }}
              >
                
              </div>
              <div
                style={{
                  flex: 1,
                  borderTop: '1px solid #D5D5D5',
                  borderBottom: '1px solid #D5D5D5',
                  borderRight: '1px solid #D5D5D5',
                }}
              >
                
              </div>
            </div>
            <div
              style={{
                flex: 0.15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom:'1px solid #D5D5D5',
                borderRight:'1px solid #D5D5D5',
                cursor:'pointer'
              }}
              onClick={() => history.push('/user/servicerecord')}
            >查看所有订单 >></div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CustomerService;
