/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-21 19:46:34
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-21 19:57:01
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

export async function getOrderList(pagenum: any,pagesize: any) {
  return request(`/api2/customer/order/getByUserId?pageNum=${pagenum}&pageSize=${pagesize}&userId=${GetUserId()}`, {
    method: 'GET',
  });
}
