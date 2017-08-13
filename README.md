# get-meta
Returns meta information for the given url

[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/get-meta.svg)](https://travis-ci.org/indatawetrust/get-meta)

##### user
```js
let getMeta = require('get-meta');

getMeta('https://github.com').then(console.log)

{
  title: "The world's leading software development platform · GitHubsecurity-adminintegrationsopen-source",
  charset: 'utf-8',
  name: 'theme-color',
  content: '#1e2327',
  property: 'og:image:height',
  'data-pjax-transient': '',
  value: '/',
  class: 'js-ga-set',
  'http-equiv': 'x-pjax-version',
}
```
