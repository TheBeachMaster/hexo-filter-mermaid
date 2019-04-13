var assign = require('deep-assign');
var renderer = require('./lib/renderer');

hexo.config.diagrams = assign({
  mermaid: 'https://unpkg.com/mermaid@8.0.0/dist/mermaid.js'
}, hexo.config.diagrams);

hexo.extend.filter.register('before_post_render', renderer.render, 9);

