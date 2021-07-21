/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-21 13:51:54
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-21 14:24:43
 */
import React from 'react';
import { Spin } from 'antd';
 
// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
function PageLoading(){
 return(
 <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" />
  </div>
 )
};
export default PageLoading;
