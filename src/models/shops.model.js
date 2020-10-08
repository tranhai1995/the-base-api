// shops-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const { Schema } = require('mongoose')
module.exports = function (app) {
  const modelName = 'shops'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const schema = new Schema(
    {
      domain: { type: String },
      topLvDomain: { type: String },
      shopName: { type: String },
      address: { type: String },
      description: { type: String },
      category: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
      phone: { type: String },
    },
    {
      timestamps: true,
    }
  )

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName)
  }
  return mongooseClient.model(modelName, schema)
}
