const { Schema } = require('mongoose');

module.exports = function (app) {
  const modelName = 'user_dashboard';
  const mongooseClient = app.get('mongooseClient');
  const schema = new mongooseClient.Schema(
    {
      userId: { type: Schema.Types.ObjectId, ref: 'users', require: true },
      roomId: { type: Schema.Types.ObjectId, ref: 'dashboard', require: true },
      deletedAt: { type: Schema.Types.Date, default: null },
      socketId: { type: Schema.Types.String, require: true },
    },
    {
      timestamps: true,
    }
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
