const path = require('path');
const { getJson } = require('./utils');
const profileFile = path.resolve(__dirname, 'data', 'profile.json');

module.exports = app => {
  const getProfile = () => {
    return getJson(profileFile);
  };

  app.get('/profile', async (req, res) => {
    res.json(await getProfile());
  });
};
