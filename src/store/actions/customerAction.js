import * as types from '../types';

export const getCustomerList = (data) => ({
  type: types.CUSTOMER.LIST,
  data,
});

export const getCustomerAddressAction = (data) => ({
  type: types.CUSTOMER.ADDRESS,
  data,
});
