/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-22 03:13:38
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 03:34:39
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

export async function getOrderById(id:number) {
  return request(`/api2/customer/order/selectById?id=${id}`, {
    method: 'GET',
  });
}

export async function getOrderItemById(id: number) {
  return request(`/api2/customer/orderItem/selectById?id=${id}`, {
    method: 'GET',
  });
}

export async function getProductById(id: string) {
  return request(`/api2/customer/commodityList/selectById?id=${id}`, {
    method: 'GET',
  });
}

export async function getAddressById(id: number) {
  return request(`/api2/customer/address/selectById?id=${id}`, {
    method: 'GET',
  });
}
