/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 11:20:38
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 11:25:57
 */
import request from 'umi-request';

const deleteAddressUrl='http://rap2api.taobao.org/app/mock/286636/getsuccess'
const eidtAddressUrl='http://rap2api.taobao.org/app/mock/286636/getsuccess'
const addAddressUrl='http://rap2api.taobao.org/app/mock/286636/getsuccess'

export async function deleteAddress() {
  return request(deleteAddressUrl, {
    method: 'GET',
  });
}

export async function editAddress() {
  return request(eidtAddressUrl, {
    method: 'GET',
  });
}

export async function addAddress() {
  return request(addAddressUrl, {
    method: 'GET',
  });
}
