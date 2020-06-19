const express = require('express')

const router = express.Router()
const Result = require('../model/Result')
const multer = require('multer')
const { UPLOAD_PATH } = require('../utils/constant')

router.post('/upload',
  multer({ dest: `${ UPLOAD_PATH }/book` }).single('file'), (req, res) => {
  if(!req.file || req.file.length === 0) {
    new Result('上传电子书失败').fail(res)
  } else {
    new Result('上传电子书成功').success(res)
  }
})

module.exports = router
