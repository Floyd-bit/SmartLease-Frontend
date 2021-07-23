/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-22 16:23:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-23 14:44:26
 */
import React from 'react';
import {Image} from 'antd';

const ServiceTitle: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#C6DCF9',
          border: '2px solid #D5D5D5',
          height: '50px',
        }}
      >
        <div style={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          商品名称
        </div>
        <div style={{ display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          包装清单
        </div>
        <div style={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          租赁数量
        </div>
      </div>
      <div style={{ display: 'flex', height: '80px' }}>
        <div
          style={{
            display: 'flex',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '2px solid #D5D5D5',
            borderLeft: '2px solid #D5D5D5',
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              marginRight: '20px',
              backgroundColor: 'gray',
            }}
          ><Image src="https://img.alicdn.com/imgextra/i3/24386130/O1CN01nHyquc1v9aZRNeTn9_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"/></div>
          <div>新款骁龙865手机5G全网通大屏智能安卓千元学生价游戏分期免息</div>
        </div>
        <div
          style={{
            flex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '2px solid #D5D5D5',
            borderLeft: '2px solid #D5D5D5',
          }}
        >
          蓝色 金属 * 1 
        </div>
        <div
          style={{
            flex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '2px solid #D5D5D5',
            borderLeft: '2px solid #D5D5D5',
            borderRight: '2px solid #D5D5D5',
          }}
        >
          1
        </div>
      </div>
    </div>
  );
};

export default ServiceTitle;
