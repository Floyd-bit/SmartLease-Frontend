/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-22 16:28:22
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-23 17:28:53
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

export async function getOrderById(id:number) {
  return request(`/api2/customer/order/selectById?id=${id}`, {
    method: 'GET',
  });
}

export async function getOrderPaid(id:number) {
  return request(`https://service-mif38upx-1300473173.sh.apigw.tencentcs.com/release/edit-order-status?id=${id}&status=2`, {
    method: 'GET',
  });
}
