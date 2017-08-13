const request = require('request'), cheerio = require('cheerio');

module.exports = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) reject(err);

      let $ = cheerio.load(body), metas = {};

      metas['title'] = $('title').text();

      $('meta').each((i, el) => {
        metas = Object.assign(metas, el.attribs);
      });

      resolve(metas);
    });
  });
};
