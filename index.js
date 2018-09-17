const request = require('request'),
  cheerio = require('cheerio'),
  _url = require('url'),
  urlRegex = require('url-regex'),
  isReachable = require('is-reachable');

module.exports = ({ url, timeout = 5e3 }) => {
  return new Promise((resolve, reject) => {
    request({
      url,
      timeout: timeout 
    }, async (err, response, body) => {
      if (err) reject(err);

      if (body && typeof body == 'string') {
        let $ = cheerio.load(body), metas = {};

        let main = _url.parse(url, true);

        main = `${main.protocol}\/\/${main.hostname}`;

        const image =
          $('body').find('img').toArray().map(img => {
            const src = $(img).attr('src') || $(img).attr('data-src');

            if (main && src && !urlRegex({exact: true}).test(src)) {
              return _url.resolve(main, src);
            }

            return src;
          })[0] || '';

        if ($('[rel=icon]').attr('href')) {
          const icon = _url.resolve(main, $('[rel=icon]').attr('href'));

          metas['icon'] = (await isReachable(_url.resolve('http://', icon))) ? icon : '';
        } else {
          metas['icon'] = '';
        }

        metas['title'] = $('title').text();
        metas['image'] = (await isReachable(_url.resolve('http://', image))) ? image : '';

        $('meta').each((i, el) => {
          metas = Object.assign(metas, el.attribs);
        });

        resolve(metas);
      } else {
        resolve({});
      }
    });
  });
};
