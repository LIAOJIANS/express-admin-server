const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const boom = require('boom')

const Result = require('../model/Result')
const { login } = require('../servers/user')
const { md5 } = require('../utils/index')
const { PWD_SALT } = require('../utils/constant')


router.post('/login',[
  body('password').isLength({ min: 5 }).withMessage('密码长度太低'),
  body('username').isLength({ min: 4 }).withMessage('用户名长度太低')
], (req, res, next) => {
  const err = validationResult(req)
  if(!err.isEmpty()) {
    const [{ msg }] = err.errors
    next(boom.badRequest(msg))
  } else {
    let { username, password } = req.body
    password = md5(`${password}${PWD_SALT}`)
    login(username, password).then(user => {
      if(!user || user.length === 0) {
        new Result('登录失败').fail(res)
      } else {
        new Result('登录成功').success(res)
      }
    })
  }
})

module.exports = router
