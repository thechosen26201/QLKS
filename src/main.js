import { createApp } from 'vue'
import App from './App.vue'
import router from './route'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import vi from 'element-plus/es/locale/lang/vi';

import mitt from 'mitt';
import store from '@/store';
// createApp(App).mount('#app')

const app = createApp(App);
const emitter = mitt();

app.use(router).use(store);
app.use(ElementPlus, {locale: vi});
app.config.globalProperties.emitter = emitter;
app.mount('#app');
