/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:40:19
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 15:21:08
 */
import request from 'umi-request';

const getRefundListUrl='http://rap2api.taobao.org/app/mock/286636/getFavoriteList'

export async function getRefundList() {
  return request(getRefundListUrl, {
    method: 'GET',
  });
}
