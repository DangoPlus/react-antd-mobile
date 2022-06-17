import { defineConfig } from 'umi';

export default defineConfig({
  title: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  antdMobile: {
    hd: true,
  },
});
