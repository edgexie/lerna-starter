import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import MxButton from '@mx/button';

const app = createApp(App);
app.use(MxButton);
app.mount('#app');
