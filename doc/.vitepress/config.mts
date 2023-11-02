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
  themeConfig: {
    lastUpdated: {
      text: '最后更新时间：',
    },
    logo: '/favicon_io/favicon-32x32.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '大前端', link: '/cn/comprehensive-front-end/rank' },
      { text: 'Mx组件', link: '/cn/mx-components/' },
    ],

    sidebar: {
      '/cn/comprehensive-front-end/': [
        {
          text: '前端职级与招聘',
          base: '/cn/comprehensive-front-end/',
          link: 'rank',
        },
        {
          text: 'JavaScript',
          base: '/cn/comprehensive-front-end/js-docs/',
          collapsed: false,
          items: [{ text: '书写规范', link: '书写规范' }],
        },
      ],
      '/cn/mx-components/': [
        {
          text: '公共组件',
          base: '/cn/mx-components/common-components/',
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
});
