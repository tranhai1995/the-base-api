const users = require('./users/users.service');
// eslint-disable-next-line no-unused-vars
const UserDashboard = require('./user-dashboard/users-dashboard.service');
const shops = require('./shops/shops.service.js');
const categories = require('./categories/categories.service.js');
const topLvDomain = require('./top-lv-domain/top-lv-domain.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(UserDashboard);
  app.configure(shops);
  app.configure(categories);
  app.configure(topLvDomain);
};
