import Cookies from 'js-cookie'
import axios from 'axios';
axios.defaults.baseURL='/site-api';

let currentUser = null
const setCurrentUser = (cu, token) => {
  currentUser = cu
  Cookies.set("jwt-token", token, {expires: 1})
}
export default {
  getCurrentUser() {
    return currentUser
  },
  setCurrentUser,
  axios(params) {
    return new Promise((res, rej) => {
      axios(params).then(res).catch(ex => {
        const {
          mock
        } = params
        if (mock) {
          const buildResponse = data => {
            return { // 模拟axios返回的数据结构
              data
            }
          }
          
          let mockData = null
          if( typeof mock === 'function') {
            mockData=buildResponse(mock(params))
          } else {
            mockData = buildResponse(mock)
          }
          console.log('调用接口失败，采用mock数据', mockData)
          res(mockData)
        } else {
          rej(ex)
        }
      })
    })
  }
}