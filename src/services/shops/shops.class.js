const { Service } = require('feathers-mongoose')

exports.Shops = class Shops extends Service {
  constructor(options, app) {
    super(options)
    this.app = app
  }
//   async find(params) {
//     console.log(params)
//     const categories = await this.app.service('categories').find()
//     return categories
//   }
}
