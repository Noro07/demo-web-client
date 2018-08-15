import mockUser from './api/user';

module.exports = (app, enableMock) => {
  if (enableMock) {
    mockUser(app);
  }
};
