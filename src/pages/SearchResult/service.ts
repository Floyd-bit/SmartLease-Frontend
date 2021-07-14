/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-12 19:21:03
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-13 20:34:01
 */
import request from 'umi-request';

interface getSearchResultProps{
  keyword:string;//搜索关键词
  rank:string;//排序类型 0-综合排序 1-价格降序 2-价格升序 3-评价降序 4-评价升序 5-销量降序 6-销量升序
  pagenum:number;
  pagesize:number;
  minprice:any;
  maxprice:any;
}

const baseUrl='http://rap2api.taobao.org/app/mock/286636/getItemList?'

export async function getSearchResult(props: getSearchResultProps) {
  let getSearchResultUrl=baseUrl+'keyword='+props.keyword+'&pagenum='+props.pagenum+'&pagesize='+props.pagesize+(props.rank?'&rank='+props.rank:'')+(props.minprice?'&minprice='+props.minprice:'')+(props.maxprice?'&maxprice='+props.maxprice:'')
  console.log(getSearchResultUrl)
  return request(getSearchResultUrl, {
    method: 'GET',
  });
}
