/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-21 16:27:07
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-21 18:40:36
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

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

const getAddressListUrl = '/api2/customer/address/selectByUserId?userId=';
export async function getAddressList() {
  return request(getAddressListUrl + GetUserId(), {
    method: 'GET',
  });
}

export async function getDefaultAddress() {
  return request('/api2/customer/address/selectDefaultAddress?userId=' + GetUserId(), {
    method: 'GET',
  });
}

export async function CreateOrderApi(data: any) {
  return request('/api2/customer/order/create',{
      method: 'POST',
      data: data,
    },
  );
}

export async function deleteShoppingCart() {
  return request(`/api2/customer/commodityCart/deleteByUserId?userId=${GetUserId()}`, {
    method: 'DELETE',
  });
}
