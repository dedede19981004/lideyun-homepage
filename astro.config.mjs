// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dedede19981004.github.io/lideyun-homepage',
  integrations: [sitemap()],
  // 说明：GitHub Pages 部署时 withastro/action 会自动识别仓库名并设置 base 路径，无需手动修改。
});
