/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 15:18:12
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 11:51:46
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
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
          component: '../pages/SearchResult'
        },
        {
          path: '/login', component: '../pages/Login'
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
              component: '../pages/ShoppingCar'
            },
            {
              path: '/user/address',
              component: '../pages/Address'
            },
            {
              path: '/user/favorite',
              component: '../pages/Favorite'
            },
            {
              path: '/user/refund',
              component: '../pages/Refund'
            },
          ],
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: '租享宝',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/api2": {
      "target": "http://47.110.156.20:8085/",
      "changeOrigin": true,
      "pathRewrite": { "^/api2" : "" }
    }
  }
}

export default config;
