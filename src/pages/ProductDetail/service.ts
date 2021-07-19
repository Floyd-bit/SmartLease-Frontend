/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-16 15:18:24
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 15:13:31
 */
import request from 'umi-request';

const BaseUrl='/api2/customer/commodityList/selectById?id='

export async function getDetail(props:any) {
  const getDetailUrl=BaseUrl+props.id;
  return request(getDetailUrl, {
    method: 'GET',
  });
}

export async function addFavorite(id:number) {
  const addFavoriteUrl='/api2/customer/favorite/create'
  return request(addFavoriteUrl, {
    method: 'POST',
    data:{
      commodityId: id,
      commodityName: "",
      description: "",
      id: 0,
      starCount: 0,
      subImages: "",
      userId: 6
    }
  });
}
