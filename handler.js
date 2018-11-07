'use strict';

const marketingIpsum = require('digital-marketing-ipsum');
const { renderHTML } = require('./helper/render');
const defaultConfig = {
  sentenceMin: 10,
  sentenceMax: 10,
  paragraphs: 1
};

module.exports.ipsum = async (event, context, callback) => {
    let ipsum;
    try {
      ipsum = marketingIpsum.generateIpsum(defaultConfig)
    } catch (error) {
      ipsum = 'Could not get your ipsum';
    }

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: renderHTML(ipsum),
  };

    callback(null, response);
};
