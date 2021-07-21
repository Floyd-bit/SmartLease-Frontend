/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-20 17:00:38
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-21 21:05:35
 */
import GetUserId from '@/utils/GetUserId';
import request from '@/utils/request';

export async function getShoppingCart(data: any) {
  return request(
    `/api2/customer/commodityCart/getByUserId?pageNum=${data.pageNum}&pageSize=${
      data.pageSize
    }&userId=${GetUserId()}`,
    {
      method: 'GET',
    },
  );
}

export async function getProductById(id: string) {
  return request(`/api2/customer/commodityList/selectById?id=${id}`, {
    method: 'GET',
  });
}

export async function deleteShoppingCart() {
  return request(`/api2/customer/commodityCart/deleteByUserId?userId=${GetUserId()}`, {
    method: 'DELETE',
  });
}
