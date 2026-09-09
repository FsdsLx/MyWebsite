'use strict';

// 当站内一篇文章都没有时，hexo-generator-index 不会生成首页，导致根路径 404
// （hexo server 打开 http://localhost:4000/ 显示 Cannot GET /）。
// 这里在原有 index 生成器外面包一层：无文章时也产出一个空首页，配合
// themes/fsdslx 的空态文案正常渲染，有文章时行为与原来完全一致。

const original = hexo.extend.generator.store['index'];

hexo.extend.generator.register('index', function (locals) {
  const pages = original ? original.call(this, locals) : [];

  if (pages && pages.length) return pages;

  const cfg = this.config;
  const path = (cfg.index_generator && cfg.index_generator.path) || '';
  return [{
    path,
    layout: ['index', 'archive', 'category', 'tag', 'page'],
    data: { posts: [] }
  }];
});
