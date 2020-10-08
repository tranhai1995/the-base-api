const { Service } = require('feathers-mongoose')

exports.Users = class Users extends Service {
  constructor(options, app) {
    super(options)
    this.app = app
  }
  async create(data, params) {
    const { email, password, domainName, topLvDomain } = data;
    const shop = await this.app.service('shops').create({
      shopName: domainName,
      domain: domainName,
      topLvDomain: topLvDomain,
    })
    const user = super.create({ idShop: shop._id, email, password })
    return user
  }
}
