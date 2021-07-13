/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-10 15:18:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-13 14:16:49
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout/index',
      routes: [
        { path: '/', component: '../pages/index' },
        {
          path: '/itemlist',
          component: '../pages/ItemList'
        },
        {
          path: '/search',
          component: '../pages/SearchResult'
        },
        {
          path: '/login', component: '../pages/Login'
        },
        {
          path: '/register', component: '../pages/Register'
        },
        {
          path: '/personal',
          routes: [
            {
              path: '/personal/shoppinglist',
              component: '../pages/ShoppingList'
            },
            {
              path: '/personal/my',
              component: '../pages/My'
            },
            {
              path: '/personal/orderlist',
              component: '../pages/OrderList'
            },
            {
              path: '/personal/shoppingcar',
              component: '../pages/ShoppingCar'
            }
          ],
        }
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: '租享宝',
      dll: false,
      // mfsu:{},
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/api2": {
      "target": "http://jp-tyo-ilj-1.natfrp.cloud:38298/",
      "changeOrigin": true,
      "pathRewrite": { "^/api2" : "" }
    }
  }
}

export default config;
