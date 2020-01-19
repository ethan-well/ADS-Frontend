import React from 'react';
import conf from '../conf/conf';
const axios = require('axios');

export function Get(url, parmas = {}, callBack) {
  return async() => {
    try {
      const response = await axios({
        url: `${conf.api.url}/${url}`,
        method: 'get',
        parmas: parmas,
      })
      callBack(true, response);
    } catch (error) {
      callBack(false, error);
    }
  }
}

export function Post(url, data = {}, callBack) {
  return async() => {
    try {
      const response = await axios.post(`${conf.api.url}/${url}`, data);
      callBack(true, response);
    } catch (error) {
      callBack(false, error);
    }
  }
}