import request from '@/utils/request';

export async function deleteShoppingCartById(id: number) {
  return request(`/api2/customer/commodityCart/deleteById?id=${id}`, {
    method: 'DELETE',
  });
}
