import axios from 'axios'


export default {
  getWether: (): object => {
    return axios.get('apiStore/Product/getProductInfo/?productID=76')
  }
}