import { defineConfig } from 'vitepress';

import zhihu from './zhihu.mts';
import bilibili from './bilibili.mts';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MX-CodeCraft',
  description: 'think things through',
  srcDir: './src',
  head: [['link', { rel: 'icon', href: '/favicon_io/favicon.ico' }]],
  lang: 'zh-CN',
  lastUpdated: true,
  appearance: 'dark',
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: {
      text: '最后更新时间：',
    },
    logo: '/favicon_io/favicon-32x32.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端基础',
        link: '/cn/front-end/base/rank',
        activeMatch: '/front-end/base/',
      },
      {
        text: '前端进阶',
        link: '/cn/front-end/frame/vue/',
        activeMatch: '/front-end/frame',
      },
      {
        text: '可视化',
        link: '/cn/front-end/visual/leaflet/with-antdv-button',
        activeMatch: '/front-end/visual',
      },
      {
        text: '后端技术',
        link: '/cn/back-end/nestjs/开始',
        activeMatch: '/back-end/',
      },
      { text: '工程化', link: '/cn/engineering/' },
      {
        text: 'Mx组件',
        link: '/cn/mx-components/',
        activeMatch: '/mx-components/',
      },
    ],

    sidebar: {
      '/cn/front-end/base/': [
        {
          text: '前端职级与招聘',
          base: './',
          link: 'rank',
        },
        { text: '书写规范', base: './', link: '书写规范' },
      ],
      '/cn/front-end/frame/': [
        {
          text: 'vue',
          base: './',
        },
      ],
      '/cn/front-end/visual/': [
        {
          text: 'leaflet',
          base: './',
          items: [
            {
              text: '使用a-button',
              link: 'with-antdv-button',
            },
          ],
        },
      ],
      '/cn/back-end/nestjs/': [
        {
          text: 'NestJS',
          base: './',
          collapsed: false,
          items: [
            { text: 'Get start', link: '开始' },
            { text: '控制器', link: '控制器' },
            { text: '中间件', link: '中间件' },
            { text: '异常过滤器', link: '异常过滤器' },
            { text: '管道', link: '管道' },
            { text: '守卫', link: '守卫' },
            { text: '拦截器', link: '拦截器' },
            { text: '自定义装饰器', link: '自定义装饰器' },
            { text: '与MySQL', link: '与MySQL' },
            {
              text: '实践',
              base: './practice/',
              items: [
                {
                  text: 'nestjs与vercel集成',
                  link: 'intergrate-with-vercel',
                },
              ],
            },
          ],
        },
      ],
      '/cn/mx-components/': [
        {
          text: '公共组件',
          base: './common-components/',
          items: [{ text: '按钮', link: '按钮' }],
        },
      ],
    },
    // 社交账号
    socialLinks: [
      { icon: 'github', link: 'https://github.com/edgexie' },
      {
        icon: {
          svg: zhihu,
        },
        link: 'https://www.zhihu.com/people/edgexxx',
      },
      {
        icon: {
          svg: bilibili,
        },
        link: 'https://space.bilibili.com/337059066?spm_id_from=333.999.0.0',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/edgexie/edgexie.github.io/tree/master/docs/src/:path',
      text: 'Edit this page on GitHub',
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'cn',
    },
    // en: {
    //   label: "English",
    //   lang: "en", // optional, will be added  as `lang` attribute on `html` tag
    //   link: "/en/", // default /fr/ -- shows on navbar translations menu, can be external
    //   // other locale specific properties...
    // },
  },
  // plugins: [
  //   {
  //     install: (app) => {
  //       // 全局方法示例
  //       app.config.globalProperties.$getUrl = (path) => {
  //         return import.meta.env.VITE_URL + path;
  //       };
  //     },
  //   },
  // ],
});
