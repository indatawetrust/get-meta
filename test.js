import test from 'ava';
import getMeta from './index';

test('manual', async t => {
  t.deepEqual(
    {
      icon: 'https://assets-cdn.github.com/favicon.ico',
      title: 'The world’s leading software development platform · GitHub1clr-code-hosting',
      image: 'https://assets-cdn.github.com/images/search-shortcut-hint.svg',
      charset: 'utf-8',
      name: 'theme-color',
      content: '#1e2327',
      property: 'og:image:height',
      'data-pjax-transient': '',
      value: '/',
      class: 'js-ga-set',
      'http-equiv': 'x-pjax-version',
    },
    await getMeta({ url: 'https://github.com' }),
  );
});
