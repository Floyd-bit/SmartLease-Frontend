/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 11:20:38
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-20 11:14:40
 */
import request from 'umi-request';
import GetUserId from '@/utils/GetUserId';

const deleteAddressUrl = '/api2/customer/address/deleteById?id=';
const eidtAddressUrl = '/api2/customer/address/update?';
const addAddressUrl = '/api2/customer/address/create';

export async function deleteAddress(id: number) {
  return request(deleteAddressUrl + id, {
    method: 'DELETE',
  });
}

export async function editAddress(
  address: string,
  receiverName: string,
  receiverPhone: string,
  isDefault: boolean,
  id: number,
) {
  return request(
    eidtAddressUrl +
      'address=' +
      address +
      '&receiverName=' +
      receiverName +
      '&receiverPhone=' +
      receiverPhone +
      '&isDefault=' +
      isDefault +
      '&id=' +
      id +
      '&userId=' +
      GetUserId(),
    {
      method: 'PUT',
    },
  );
}

export async function addAddress(
  address: string,
  receiverName: string,
  receiverPhone: string,
  isDefault: boolean,
) {
  return request(addAddressUrl, {
    method: 'POST',
    data: {
      address: address,
      city: '',
      country: '',
      district: '',
      id: 0,
      isDefault: isDefault,
      province: '',
      receiverName: receiverName,
      receiverPhone: receiverPhone,
      userId: GetUserId(),
      zip: '',
    },
  });
}
