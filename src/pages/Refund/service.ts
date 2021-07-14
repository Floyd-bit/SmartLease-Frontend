/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:40:19
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 11:13:34
 */
import request from 'umi-request';

const getFavoriteListUrl='http://rap2api.taobao.org/app/mock/286636/getFavoriteList'
const deleteFavoriteUrl='http://rap2api.taobao.org/app/mock/286636/getsuccess'

export async function getFavoriteList() {
  return request(getFavoriteListUrl, {
    method: 'GET',
  });
}

export async function deleteFavorite() {
  return request(deleteFavoriteUrl, {
    method: 'GET',
  });
}
