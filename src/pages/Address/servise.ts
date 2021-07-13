import request from 'umi-request';

const getAddressListUrl='http://rap2api.taobao.org/app/mock/286636/getAddressList'

export async function getAddressList() {
  return request(getAddressListUrl, {
    method: 'GET',
  });
}
