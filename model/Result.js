const {
  CODE_ERROR,
  CODE_SUCCESS,
  CODE_TOKEN_ERROR
} = require('../utils/constant')

class Result {
  constructor(data, msg = '操作成功', options) {
    this.data = null
    if (arguments.length === 0) {
      this.msg = '操作成功'
    } else if (arguments.length === 1) {
      this.msg = data
    } else {
      this.data = data
      this.msg = msg
      if (options) this.options = options
    }
  }

  content() {
    if (!this.code) {
      this.code = CODE_SUCCESS
    }
    let base = {
      code: this.code,
      msg: this.msg
    }
    if (this.data) {
      base.data = this.data
    }
    if (this.options) {
      base.data = {...this.data, ...this.options}
    }
    return base
  }

  send(res) {
    res.send(this.content())
  }

  success(res) {
    this.code = CODE_SUCCESS
    this.send(res)
  }

  fail(res) {
    this.code = CODE_ERROR
    this.send(res)
  }

  tokenError(res) {
    this.code = CODE_TOKEN_ERROR
    this.send(res)
  }
}

module.exports = Result
