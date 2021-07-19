/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 15:18:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-19 15:20:34
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  dva: {},
  antd: {},
  mfsu: {},
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout/index',
      routes: [
        { path: '/', component: '../pages/index' },
        {
          path: '/itemlist',
          component: '../pages/ItemList',
        },
        {
          path: '/search',
          component: '../pages/SearchResult',
        },
        {
          path: '/login',
          component: '../pages/Login',
        },
        {
          path: '/register',
          component: '../pages/Register',
        },
        {
          path: '/detail',
          component: '../pages/ProductDetail',
        },
        {
          path: '/payment',
          component: '../pages/Payment',
        },
        {
          path: '/createorder',
          component: '../pages/CreateOrder',
        },
        {
          path: '/orderdetail',
          component: '../pages/OrderDetail',
        },
        {
          path: '/orderdetail',
          component: '../pages/OrderDetail',
        },
        {
          path: '/storedetail',
          component: '../pages/StoreDetail',
        },
        {
          path: '/user',
          routes: [
            {
              path: '/user/history',
              component: '../pages/History',
            },
            {
              path: '/user',
              component: '../pages/User',
            },
            {
              path: '/user/orderlist',
              component: '../pages/OrderList',
            },
            {
              path: '/user/shoppingcar',
              component: '../pages/ShoppingCar',
            },
            {
              path: '/user/address',
              component: '../pages/Address',
            },
            {
              path: '/user/favorite',
              component: '../pages/Favorite',
            },
            {
              path: '/user/refund',
              component: '../pages/Refund',
            },
            {
              path: '/user/customerservice',
              component: '../pages/CustomerService',
            },
            {
              path: '/user/serviceapply',
              component: '../pages/ServiceApply',
            },
            {
              path: '/user/servicerecord',
              component: '../pages/ServiceRecord',
            },
          ],
        },
      ],
    },
  ],

  // ref: https://umijs.org/plugin/umi-plugin-react.htm

  proxy: {
    '/api2': {
      target: 'http://47.110.156.20:8085/',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    },
    '/api3': {
      target: 'http://localhost:8085/',
      changeOrigin: true,
      pathRewrite: { '/api3': '/api'},
    },
  },
};

export default config;
