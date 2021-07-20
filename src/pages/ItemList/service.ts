/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-12 14:59:49
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-20 09:48:30
 */
import request from 'umi-request';

interface getItemListProps{
  type:string;//商品类型 1-游戏装备 2-数码摄影 3-电脑办公 4-精品手机 5-娱乐影音
  rank:string;//排序类型 0-综合排序 1-价格降序 2-价格升序 3-评价降序 4-评价升序 5-销量降序 6-销量升序
  pagenum:number;
  pagesize:number;
  minprice:any;
  maxprice:any;
}
const baseUrl='/api2/customer/commodityList/searchCommodityList?'

export async function getItemList(props:getItemListProps) {
  let getItemListUrl=baseUrl+'type='+props.type+'&pageNum='+props.pagenum+'&pageSize='+props.pagesize+(props.rank?'&rank='+props.rank:'')+(props.minprice?'&minprice='+props.minprice:'')+(props.maxprice?'&maxprice='+props.maxprice:'')
  console.log(getItemListUrl)
  return request(getItemListUrl, {
    method: 'GET',
  });
}
