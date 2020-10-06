const users = require('./users/users.service');
// eslint-disable-next-line no-unused-vars
const UserDashboard = require('./user-dashboard/users-dashboard.service');
module.exports = function (app) {
  app.configure(users);
  app.configure(UserDashboard);
};
