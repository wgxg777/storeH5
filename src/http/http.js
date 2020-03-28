import axios from 'axios';
import { Toast } from 'vant';

axios.interceptors.response.use((response) => {
  console.log(response);
  if (response.data.code === '1001') {
    return response;
  }
  Toast(response.data.desc);


  return Promise.reject(response);
},
(error) => Promise.reject(error.response));

export default {

  /**
     * 封装get方法
     * @param url
     * @param data
     * @returns {Promise}
     */

  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params,
      }).then((response) => {
        resolve(response.data);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  /**
     * 封装post请求
     * @param url
     * @param data
     * @returns {Promise}
     */

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then((response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  /**
     * 封装put请求
     * @param url
     * @param data
     * @returns {Promise}
     */

  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data).then((response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      });
    });
  },

  /**
     * 封装Delete请求
     * @param url
     * @param data
     * @returns {Promise}
     */

  delete(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, data).then((response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      });
    });
  },
  patch(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.patch(url, data).then((response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      });
    });
  },
};
