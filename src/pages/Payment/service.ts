/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-22 16:28:22
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-22 16:28:22
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

export async function getOrderById(id:number) {
  return request(`/api2/customer/order/selectById?id=${id}`, {
    method: 'GET',
  });
}
