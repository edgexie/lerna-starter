import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Layout from './Layout.vue';
import AboutMe from './AboutMe.vue';
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom';
import 'leaflet/dist/leaflet.css';
import { useRoute } from 'vitepress';
import {
  Button,
  Card,
  ConfigProvider,
  Form,
  FormItem,
  Input,
  Alert,
  Space,
  Popover,
  Col,
  Row,
  Collapse,
  CollapsePanel,
} from 'ant-design-vue';
// import Mx from "@mx/button";
export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  Layout,
  enhanceApp(ctx) {
    const { app } = ctx;
    app.use(Button);
    app.use(Card);
    app.use(ConfigProvider);
    app.use(Form);
    app.use(FormItem);
    app.use(Input);
    app.use(Alert);
    app.use(Space);
    app.use(Popover);
    app.use(Col);
    app.use(Row);
    app.use(Collapse);
    app.use(CollapsePanel);
    // app.use(Mx);
    // register your custom global components
  },
};
