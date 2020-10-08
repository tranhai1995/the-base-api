const app = require('../../src/app');

describe('\'topLvDomain\' service', () => {
  it('registered the service', () => {
    const service = app.service('top-lv-domain');
    expect(service).toBeTruthy();
  });
});
