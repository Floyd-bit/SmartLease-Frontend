/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-13 08:46:08
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-13 20:03:54
 */
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


