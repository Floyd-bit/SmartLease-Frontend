/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:40:19
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-14 11:36:34
 */
import request from 'umi-request';

const getHistoryListUrl='http://rap2api.taobao.org/app/mock/286636/getFavoriteList'
const deleteHistoryUrl='http://rap2api.taobao.org/app/mock/286636/getsuccess'

export async function getHistoryList() {
  return request(getHistoryListUrl, {
    method: 'GET',
  });
}

export async function deleteHistory() {
  return request(deleteHistoryUrl, {
    method: 'GET',
  });
}
