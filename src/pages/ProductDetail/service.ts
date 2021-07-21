/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-16 15:18:24
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-21 09:43:48
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

const BaseUrl = '/api2/customer/commodityList/selectById?id=';

export async function getDetail(props: any) {
  const getDetailUrl = BaseUrl + props.id;
  return request(getDetailUrl, {
    method: 'GET',
  });
}

export async function addFavorite(id: number) {
  const addFavoriteUrl = '/api2/customer/favorite/create';
  return request(addFavoriteUrl, {
    method: 'POST',
    data: {
      commodityId: id,
      commodityName: '',
      description: '',
      id: 0,
      starCount: 0,
      subImages: '',
      userId: GetUserId(),
    },
  });
}

export async function createShoppingCartRecord(data: any) {
  return request(`api2/customer/commodityCart/create`, {
    method: 'POST',
    data: data,
  });
}

export async function addSearchRecord(commodityId:number) {
  return request(`api2/customer/searchRecord/create`, {
    method: 'POST',
    data: {
      userId: GetUserId(),
      commodityId: commodityId,
    },
  });
}
