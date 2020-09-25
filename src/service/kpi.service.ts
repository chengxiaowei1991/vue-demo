import axios from 'axios'


export default {
  getKpi: (): Promise<object> => {
    return axios.get('/apiStore/Product/getProductInfo/?productID=76')
  }
}

export function test1 (): void {
  //
}
export function test2 (): void {
  //
}
export function test3 (): void {
  //
}