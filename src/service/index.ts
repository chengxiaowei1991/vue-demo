import axios from 'axios'
import departService from './depart.service';
import kpiService from './kpi.service';

export default {
  getWether: (): Promise<object> => {
    return axios.get('apiStore/Product/getProductInfo/?productID=76')
  },
  ...departService,
  kpiService,
}