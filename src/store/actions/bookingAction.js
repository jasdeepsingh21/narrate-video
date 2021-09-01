import * as types from '../types';

export const singleBooking = (data) => ({
  type: types.BOOKING.SINGLE,
  data,
});

export const saveSingleBooking = (data) => {
  console.log('data at action is : :', data);
  return {
    type: types.BOOKING.SAVE,
    data,
  };
};
