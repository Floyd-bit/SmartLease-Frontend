/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-13 15:22:37
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-13 20:02:13
 */
import request from 'umi-request';

const getAddressListUrl='http://rap2api.taobao.org/app/mock/286636/getAddressList'

export async function getAddressList() {
  return request(getAddressListUrl, {
    method: 'GET',
  });
}
