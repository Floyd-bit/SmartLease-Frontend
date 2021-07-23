/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-13 08:46:08
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-23 11:03:31
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

const getHotListUrl = 'http://rap2api.taobao.org/app/mock/286636/getHotList';
const getLatestListUrl = 'http://rap2api.taobao.org/app/mock/286636/getHotList';

export async function getHotList() {
  return request(getHotListUrl, {
    method: 'GET',
  });
}

export async function getLatestList() {
  return request(getLatestListUrl, {
    method: 'GET',
  });
}

export async function getAllProductType() {
  return request('api2/customer/homeType/showAll', {
    method: 'GET',
  });
}

export async function showCommodityListByTime(data: any) {
  return request(
    `api2/customer/commodityList/showCommodityList?pageNum=${data.pageNum}&pageSize=${data.pageSize}`,
    {
      method: 'GET',
    },
  );
}

export async function searchProductByName(data: any) {
  return request(
    `api2/customer/commodityList/searchByName?pageNum=${data.pageNum}&pageSize=${data.pageSize}&name=${data.name}`,
    {
      method: 'GET',
    },
  );
}

export async function getRecommendProduct() {
  return request(
    `api2/customer/commodityList/recommend?userId=${GetUserId()}
    `,
    {
      method: 'GET',
    },
  );
}

export async function getOrderOnlyTwo() {
  return request(
    `api2/customer/order/getByUserId?pageNum=1&pageSize=1&userId=${GetUserId()}
    `,
    {
      method: 'GET',
    },
  );
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
