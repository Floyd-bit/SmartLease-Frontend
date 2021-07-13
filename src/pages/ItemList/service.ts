import request from 'umi-request';
/*
*type:0
*rank:0 综合排序
*rank:1 价格降序
*rank:2 价格升序
*rank:3 评分降序
*rank:4 评分升序
*rank:5 销量降序
*rank:6 销量升序
*minprice (可选)最低价
*maxprice (可选)最高价
*/
const baseUrl='http://rap2api.taobao.org/app/mock/286636/getItemList?'

export async function getItemList(props) {
  let getItemListUrl=baseUrl+'type='+props.type+'&pagenum='+props.pagenum+'&pagesize='+props.pagesize+(props.rank?'&rank='+props.rank:'')+(props.minprice?'&minprice='+props.minprice:'')+(props.maxprice?'&maxprice='+props.maxprice:'')
  console.log(getItemListUrl)
  return request(getItemListUrl, {
    method: 'GET',
  });
}
