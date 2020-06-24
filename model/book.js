
const { MIME_TYPE, UPLOAD_URL, UPLOAD_PATH } = require('../utils/constant')
const fs = require('fs')

class Book {
  constructor(file, data) {
    if(file) {
      this.createBookFromFile(file)
    } else {
      this.createBookFormDate(data)
    }
  }

  createBookFromFile(file) {
    const {
      filename,
      destination,
      originalname,
      mimetype = MIME_TYPE,
      path
    } = file
    const suffix = mimetype === MIME_TYPE ? '.jpg' : ''
    const oldBookPath = path
    const bookPath = `${destination}/${filename}/${suffix}`
    const url = `${UPLOAD_URL}/book/${filename}${suffix}`
    const unzipPath = `${ UPLOAD_PATH }/unzip/${filename}`
    const unzipUrl = `${ UPLOAD_URL }/unzip/${filename}`
    if(!fs.existsSync(unzipPath)) {
      fs.mkdirSync(unzipPath, { recursive: true })
    }
    if(fs.existsSync(oldBookPath) && !fs.existsSync(bookPath)) {
      fs.renameSync(oldBookPath, bookPath)
    }
    this.path = `/book/${filename}${suffix}`
    this.filePath = this.path
    this.unzipPath = `/unizp/${filename}`
    this.url = url
    this.title = ''
    this.author = ''
    this.publisher = ''
    this.contents = []
    this.cover = ''
    this.category = -1
    this.categoryText = ''
    this.language = ''
    this.unzipUrl = unzipUrl
    this.originalname = originalname
  }

  createBookFormDate(data) {

  }

}

module.exports = Book
