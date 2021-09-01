import axios from 'axios';

export function getCall(urls, params = {}) {
  const url = urls;
  return axios
    .get(url, params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function getCallWithParams(url, params) {
  const config = {};
  config.params = params;
  return axios
    .get(url, config)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function postCall(url, data) {
  return axios
    .post(url, data)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function deleteCall(url, data) {
  return axios
    .delete(url, data)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function putCall(url, data) {
  return axios
    .put(url, data)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
