// Initializes the `users` service on path `/room-users`
const { UserDashboard } = require('./users-dashdoard.class');
const createModel = require('../../models/user-dashdoard.model');
const hooks = require('./users-dashboard.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
  };

  // Initialize our service with any options it requires
  app.use('/user_dashboard', new UserDashboard(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user_dashboard');

  service.hooks(hooks);
};
