'use strict';
import { App } from 'vue';
import MxButton from './MxButton.vue';
export { MxButton };
export default {
  install: (app: App, options?: any) => {
    app.component('MxButton', MxButton);
  },
};
