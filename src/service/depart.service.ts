import axios from 'axios'


export default {
  getDepart: (): Promise<object> => {
    return axios.get('apiStore/Product/getProductInfo/?productID=76')
  },
  getCheck: (): Promise<object> => {
    return axios.get('apiStore/Product/getProductInfo/?productID=76')
  },
};
