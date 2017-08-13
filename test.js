import test from 'ava';
import getMeta from './index';

test('manual', async t => {
  t.deepEqual(
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
    },
    await getMeta('https://github.com'),
  );
});
