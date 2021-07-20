import GetUserId from '@/utils/getUserId';
import request from '@/utils/request';

export async function getShoppingCart(data: any) {
  return request(
    `/api2/customer/commodityCart/getByUserId?pageNum=${data.pageNum}&pageSize=${
      data.pageSize
    }&userId=${GetUserId()}`,
    {
      method: 'GET',
    },
  );
}

export async function getProductById(id: string) {
  return request(`/api2/customer/commodityList/selectById?id=${id}`, {
    method: 'GET',
  });
}

export async function deleteShoppingCart() {
  return request(`/api2/customer/commodityCart/deleteByUserId?userId=${GetUserId()}`, {
    method: 'DELETE',
  });
}
