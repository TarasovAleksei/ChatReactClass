const fs = require('fs');

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const sleep = () => {
  return new Promise(resolve => {
    const to = random(1, 1000);

    setTimeout(resolve, to);
  });
};

const getJson = async file => {
  await sleep();
  return JSON.parse(fs.readFileSync(file));
};

const setJson = async (file, json) => {
  await sleep();
  return fs.writeFileSync(file, JSON.stringify(json, null, 2));
};

module.exports = {
  getJson,
  setJson,
};
