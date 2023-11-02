import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Layout from './Layout.vue';
import AboutMe from './AboutMe.vue';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    const { app } = ctx;

    // register your custom global components
  },
};
