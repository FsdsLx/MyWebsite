# FsdsLx

一个以中文写作的计算机技术博客，基于 [Hexo](https://hexo.io/)，使用自研的瑞士国际主义（Swiss Style）主题 `fsdslx`：白底黑字、网格排版、克莱因蓝 `#002FA7` 点缀，无评论等冗余功能。

## 目录结构

```
_config.yml            # 站点配置（标题、语言、url、主题等）
scaffolds/             # hexo new 使用的模板
source/                # 内容源
  _posts/              # 文章（Markdown）
  about/               # 关于页
  categories/ tags/    # 分类 / 标签聚合页
themes/fsdslx/         # 主题（EJS + 纯 CSS）
  _config.yml          # 主题配置：导航、首页说明、页脚起始年
  layout/              # 模板
  source/css/style.css # 全站样式（设计变量在 :root）
  source/favicon.svg
.github/workflows/     # GitHub Pages 自动部署
```

## 本地开发

```bash
npm run server   # 本地预览：http://localhost:4000
npm run build    # 生成静态站点到 public/
npm run clean    # 清理缓存
```

新建文章：

```bash
npx hexo new "文章标题"
```

文章 front matter 可填 `categories` 与 `tags`（数组形式，见 `scaffolds/post.md`）。

## 发布到 GitHub Pages

1. 按你的仓库形态修改 `_config.yml` 顶部的 `url`（以及项目站需要的 `root`）：
   - 用户站：仓库名 `<用户名>.github.io` → `url: https://<用户名>.github.io/`（root 留空即可）；
   - 项目站：其它仓库名 → `url: https://<用户名>.github.io/<仓库名>/`，并设置 `root: /<仓库名>/`。
2. 在 GitHub 新建仓库并把本目录推上去（默认分支应为 `main`）。
3. 仓库 **Settings → Pages**：Build and deployment 的 Source 选择 **GitHub Actions**。
4. 之后每次 `git push` 会自动执行 `.github/workflows/pages.yml` 构建并部署。

## 常用自定义

| 想改什么 | 改哪里 |
| -------- | ------ |
| 站点名 / 副标语 / 描述 / 作者 | 根 `_config.yml` 的 `Site` 段 |
| 顶部导航 / 首页右侧说明 / 页脚年份 | `themes/fsdslx/_config.yml` |
| 颜色、间距、字体等视觉 | `themes/fsdslx/source/css/style.css` 的 `:root` 变量与各区块 |
| 「关于」内容 | `source/about/index.md` |

## 主题出处

`themes/fsdslx` 基于 [hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus)（MIT）的模板结构改造，见主题目录内 `LICENSE`。
