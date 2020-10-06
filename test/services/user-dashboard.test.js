const app = require('../../src/app');

describe('\'user-dashboard\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-dashboard');
    expect(service).toBeTruthy();
  });
});
