import moment from 'moment';

// const momentTz = require('moment-timezone');
// import { parse } from 'date-fns';
// import { timePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

export const safelyParseJSON = (json) => {
  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    // whatever...
  }
  return parsed; // Could be undefined!
};
// DateFnsUtils
export const timeStringToObject = (time) => {
  console.log('timeStringToObject -> time', time);
  if (!time) return null;
  // moment(time).utcOffset("+05:30").format("hh:mm A")
  console.log(
    'TIME AFTER FORMAT :',
    new Date(
      moment(time, 'DD-MM-YYYY hh:mm A').format('DD-MM-YYYY hh:mm A'),
    ),
  );
  return moment(time)
    .utcOffset('+05:30')
    .format('DD-MM-YYYY hh:mm A');
};

export const formatMomentDate = (obj) => {
  return moment(obj).format();
};
export const formatMomentTime = (obj) => {
  return moment(obj).format('hh:mm:ss a');
};

export const dateObjectToString = (date) => {
  // console.log('dateObjectToString -> date', date);
  let timeZone = '+05:30';
  if (new Date().getTimezoneOffset() !== -330) {
    timeZone = '+1:00';
  }
  console.log('dateObjectToString -> timeZone', timeZone);
  if (!date) return null;
  // console.log(
  //   'UTIL DATE FORMAT :',
  //   new Date(moment.parseZone(date).utc().format()),
  // );

  // console.log(
  //   'TIME ZOME LONDON :',
  //   momentTz.utc(date).tz('America/Toronto').utc().format(),
  // );

  // console.log(
  //   'TIME ZOME INDIA:',
  //   new Date(momentTz.utc(date).tz('Asia/Kolkata').utc().format()),
  // );

  return moment(date)
    .utcOffset(timeZone)
    .format('YYY-MM-DD hh:mm A')
    .toString();
  // moment
  // .parseZone(date)
  // .utc()
  // .format('YYYY-MM-DD hh:mm A')
  // .toString();
  // return moment(date).utcOffset('+05:30').format('hh:mm');
};

export const getLocalStorage = (key) => {
  return safelyParseJSON(localStorage.getItem(key));
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const workingDays = [
  { id: 1, label: 'Monday', name: 'workingDays.monday', value: 1 },
  {
    id: 2,
    label: 'Tuesday',
    name: 'workingDays.tuesday',
    value: 1,
  },
  {
    id: 3,
    label: 'Wednesday',
    name: 'workingDays.wednesday',
    value: 1,
  },
  {
    id: 4,
    label: 'Thursday',
    name: 'workingDays.thursday',
    value: 1,
  },
  { id: 5, label: 'Friday', name: 'workingDays.friday', value: 1 },
  {
    id: 6,
    label: 'Saturday',
    name: 'workingDays.saturday',
    value: 0,
  },
  { id: 7, label: 'Sunday', name: 'workingDays.sunday', value: 1 },
];
