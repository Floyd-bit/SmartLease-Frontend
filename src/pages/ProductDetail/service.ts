/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-16 15:18:24
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-22 16:31:59
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

export async function getComments(props: any) {
  return request(`/api3/business/evaluation/selectByCommodityId?commodityId=2137&page=1&size=10`,{
    method: 'GET',
  })
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
