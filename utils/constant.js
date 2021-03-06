const { env } = require('./env')

const UPLOAD_PATH = env === 'dev' ? 'Users/sam/upload/admin-upload-ebook' : '/root/upload/admin-upload/ebook'

const UPLOAD_URL = env === 'dev' ? 'http://localhost:3000/Users/sam/upload/admin-upload-ebook' : ''

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  debug: true,
  PWD_SALT: 'admin_imooc_node',
  PRIVATE_KEY: 'admin_imooc_node_shan',
  JWT_EXPIRED: 60 * 60, // TOKEN 失效时间
  CODE_TOKEN_ERROR: -2,
  UPLOAD_PATH,
  // MIME_TYPE: 'application/epub+zip',
  MIME_TYPE: 'image/jpeg',
  UPLOAD_URL
}
