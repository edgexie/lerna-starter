import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Layout from './Layout.vue';
import AboutMe from './AboutMe.vue';
// import Mx from "@mx/button";
export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    const { app } = ctx;
    // app.use(Mx);
    // register your custom global components
  },
};
