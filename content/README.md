# lytCNAORevision2018 - GitHub Pages 个人主页（Jekyll 模板）

这是为你的仓库准备的 GitHub Pages / Jekyll 网站模板，特点：
- 中英文双语（/index.md 与 /en/index.md）
- 首页分四栏：笔记与习题、论文与科研成果、实习实践与项目、其他
- 重要内容（简历、论文、项目说明等）以 PDF 提供并可下载（放在 assets/pdfs/）
- LaTeX 在线渲染：MathJax（kramdown + mathjax）
- 自动导航栏（_data/navigation.yml）
- 站内搜索：lunr.js（前端 JS，无需服务器）
- 兼容 Minimal Mistakes 或类似 Jekyll 主题

部署简要步骤：
1. 将本仓库的 Pages 源设为 main（root）。
2. 把 assets/pdfs/ 下的占位文件替换为你的实际 PDF（CV、论文、项目等）。
3. 如果 GitHub Pages 报告插件受限，可以本地构建（bundle exec jekyll build）并把 _site 内容推到 gh-pages 分支，或使用 Simple-Jekyll-Search 纯前端替代 lunr 插件。
4. 站点地址（若部署在该仓库）： https://lytCNAORevision2018.github.io/AndrewLi.github.io