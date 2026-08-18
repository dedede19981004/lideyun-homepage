# 李德云 · 个人技术主页与博客

简约黑白风格的技术主页 + 博客一体化网站，基于 **Astro** 构建，自动部署到 **GitHub Pages**（免费）。

- 首页：简介 + 精选项目 + 最新文章 + 联系方式
- 关于：个人简介、专注方向、技术栈、自述、兴趣爱好
- 项目：5 个核心项目经历（公司信息已匿名化）
- 博客：Markdown 写作，自动生成列表与详情页
- 时间线：工作 / 教育经历（公司信息已匿名化）
- 联系：邮箱 + GitHub（电话/微信请邮件索取，保护隐私）

## 本地开发

```bash
npm install       # 安装依赖
npm run dev       # 本地开发，默认 http://localhost:4321
npm run build     # 构建到 dist/
npm run preview   # 本地预览构建结果
```

## 修改内容

| 想改什么 | 文件位置 |
| --- | --- |
| 姓名 / 邮箱 / GitHub 链接 / 技能 / 证书 / 兴趣 | `src/data/profile.ts` |
| 项目经历 | `src/data/projects.ts` |
| 时间线 | `src/data/timeline.ts` |
| 博客文章 | `src/content/blog/*.md`（新文章直接加一个 .md 文件即可） |
| 网站地址 | `astro.config.mjs` 中的 `site` |

新博客文章模板（放在 `src/content/blog/` 下）：

```markdown
---
title: "文章标题"
description: "一句话摘要，用于列表页展示"
date: 2026-08-18
tags: ["标签1", "标签2"]
---

正文内容，Markdown 格式。
```

## 部署到 GitHub Pages（一次性配置）

1. 在 GitHub 网页上新建一个仓库（New repository）：
   - 推荐仓库名：`lideyun-homepage`（或任意名字）
   - **不要**勾选添加 README（本地已有）
2. 本地执行：

   ```bash
   git init
   git add -A
   git commit -m "init: personal homepage"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/lideyun-homepage.git
   git push -u origin main
   ```

   > 推送时如需认证，用浏览器登录 GitHub 后生成的 Personal Access Token 作为密码粘贴即可（令牌只用于这次推送，不经过任何第三方）。

3. 打开仓库的 **Settings → Pages**，Source 选择 **GitHub Actions**（仓库里已带好 `.github/workflows/deploy.yml`，push 后自动构建部署，无需其他设置）。
4. 等待 Actions 跑完（约 1-2 分钟），访问：
   - 项目仓库：`https://<用户名>.github.io/lideyun-homepage/`
   - 若仓库名是 `<用户名>.github.io`：直接访问 `https://<用户名>.github.io/`

以后每次修改内容后，执行 `git add -A && git commit -m "..." && git push`，网站自动更新。

## 上线前别忘了

- [ ] `src/data/profile.ts` 中的 GitHub 链接换成你自己的
- [ ] `astro.config.mjs` 中的 `site` 改成 `https://<用户名>.github.io`（或项目仓库的完整地址）

## 隐私说明

- 工作公司名称已匿名化处理（简历原文不在仓库中，仓库里也没有简历 PDF）
- 手机号未展示在网站上，联系方式仅邮箱 + GitHub
