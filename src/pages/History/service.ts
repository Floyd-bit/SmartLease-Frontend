/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-14 10:40:19
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-21 10:26:28
 */
import GetUserId from '@/utils/GetUserId';
import request from 'umi-request';

const getHistoryListUrl='/api2/customer/searchRecord/getByUserId?'
const deleteHistoryUrl='/api2/customer/searchRecord/delete?id='

export async function getHistoryList(pagenum:any,pagesize:any) {
  return request(getHistoryListUrl+'pageNum='+pagenum+'&pageSize='+pagesize+'&userId='+GetUserId(), {
    method: 'GET',
  });
}

export async function deleteHistory(id:number) {
  return request(deleteHistoryUrl+id, {
    method: 'DELETE',
  });
}

const BaseUrl = '/api2/customer/commodityList/selectById?id=';
export async function getDetail(props: any) {
  const getDetailUrl = BaseUrl + props.id;
  return request(getDetailUrl, {
    method: 'GET',
  });
}
