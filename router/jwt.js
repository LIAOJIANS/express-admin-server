const jwt = require('express-jwt')
const { PRIVATE_KEY } = require('../utils/constant')

const jwtAuth = jwt({
  secret: PRIVATE_KEY,
  credentialRequired: true
}).unless({
  path: [
    '/',
    '/user/login'
  ] // 设置认证白名单
})

module.exports = {
  jwtAuth
}
