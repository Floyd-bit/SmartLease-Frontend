/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-22 16:23:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-23 14:45:44
 */
import React from 'react';

const ServiceInformation: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #D5D5D5',
      }}
    >
      <div style={{ fontSize: '20px' }}>信息</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '200px',
          justifyContent: 'space-around',
          paddingLeft: '30px',
        }}
      >
        <div>申请凭据：有发票</div>
        <div>返回方式：快递至商家</div>
        <div>取件时间：默认</div>
        <div style={{ display: 'flex' }}>
          <p style={{ color: 'red' }}>*</p>&nbsp;收货信息：武汉大学信息学部国软C3舍
        </div>
      </div>
    </div>
  );
};

export default ServiceInformation;
