import axios from "axios";


class RestAPI {
  
  constructor() {
    this.token = localStorage.getItem('token');
  }

  getHeaders(authorization, customHeaders) {
    if (authorization) {
      return {
        'Authorization': `Bearer ${this.token}`,
        'Platform': 'web',
        ...customHeaders
      }
    }
    return {
      'Platform': 'web',
      ...customHeaders
    }
  }

  get(url, params = {}, authorization = true, customHeaders = {}) {
    const headers = this.getHeaders(authorization, customHeaders);
    return new Promise((resolve, reject) => {
      // que los get se intenten 3 veces si recibe un error 503: Service Unavailable
      axios.get(url, { 
          params: params,
          headers: headers 
        })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  patch(url, payload, params = {}, authorization = true, customHeaders = {}) {
    const headers = this.getHeaders(authorization, customHeaders);
    return new Promise((resolve, reject) => {
      axios.patch(url, payload, { 
          params: params,
          headers: headers 
        })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }
}

export default RestAPI;
