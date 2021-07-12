import request from 'umi-request';
//此文件施工中
const getMPInfoUrl=''

export async function getMPInfo() {
  return request(getMPInfoUrl, {
    method: 'GET',
  });
}
