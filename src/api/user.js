import request from '../utils/request'
const getlogin = (data) => {
  return request({ url: '/users/login', method: 'POST' })
}

export default { getlogin }
