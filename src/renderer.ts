import './index.css';
import { createApp } from 'vue';
import App from './App.vue';
import log from 'electron-log/renderer';

log.info('Log from the renderer process');

createApp(App).mount('#app');