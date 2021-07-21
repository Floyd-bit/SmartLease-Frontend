/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-21 20:01:41
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 02:52:00
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

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

export async function deleteOrderById(id: string) {
  return request(`/api2/customer/order/deleteById?id=${id}`, {
    method: 'DELETE',
  });
}
