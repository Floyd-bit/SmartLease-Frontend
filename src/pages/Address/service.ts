/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-13 15:22:37
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-20 10:49:12
 */
import GetUserId from '@/components/GetUserId';
import request from 'umi-request';

const getAddressListUrl='/api2/customer/address/selectByUserId?userId='

export async function getAddressList() {
  return request(getAddressListUrl+GetUserId(), {
    method: 'GET',
  });
}
