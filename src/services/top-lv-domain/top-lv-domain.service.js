// Initializes the `topLvDomain` service on path `/top-lv-domain`
const { TopLvDomain } = require('./top-lv-domain.class');
const createModel = require('../../models/top-lv-domain.model');
const hooks = require('./top-lv-domain.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/top-lv-domain', new TopLvDomain(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('top-lv-domain');

  service.hooks(hooks);
};
