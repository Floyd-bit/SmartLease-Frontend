import request from 'umi-request';

const getHotListUrl='http://rap2api.taobao.org/app/mock/286636/getHotList'
const getLatestListUrl='http://rap2api.taobao.org/app/mock/286636/getHotList'


export async function getHotList() {
  return request(getHotListUrl, {
    method: 'GET',
  });
}

export async function getLatestList() {
  return request(getLatestListUrl, {
    method: 'GET',
  });
}
