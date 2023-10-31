'use strict';
import { App } from 'vue';
import MxButton from './MxButton.vue';

export default {
  install: (app: App, options?: any) => {
    app.component('mx-button', MxButton);
  },
};
