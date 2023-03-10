/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:40:19
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 17:14:02
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

const getFavoriteListUrl = '/api2/customer/favorite/selectByUserId?userId=';
const deleteFavoriteUrl = '/api2/customer/favorite/deleteById?id=';

export async function getFavoriteList() {
  return request(getFavoriteListUrl + GetUserId(), {
    method: 'GET',
  });
}

export async function deleteFavorite(id: number) {
  return request(deleteFavoriteUrl + id, {
    method: 'DELETE',
  });
}

const BaseUrl = '/api2/customer/commodityList/selectById?id=';
export async function getDetail(props: any) {
  const getDetailUrl = BaseUrl + props.id;
  return request(getDetailUrl, {
    method: 'GET',
  });
}
