import * as routesUtils from '../../config/routes';

module.exports = (app) => {
  app.get(routesUtils.API_URL_USER, (req, res) => {
    setTimeout(() => {
      res.json({ user: 'Amy' });
    }, 500);
  });
};
