// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: 将 lideyun98 替换为你的 GitHub 用户名
  site: 'https://lideyun98.github.io',
  integrations: [sitemap()],
  // 说明：GitHub Pages 部署时 withastro/action 会自动识别仓库名并设置 base 路径，无需手动修改。
});
