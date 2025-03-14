import './index.css';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import log from 'electron-log/renderer';
import type { RouterMessage } from './types/routerTypes';

log.info('Log from the renderer process');

const app = createApp(App);
app.use(router);
app.mount('#app');

window.electron.ipcRenderer.on('router', (_event, message: RouterMessage) => {
  router[message.type](message.router)
})
