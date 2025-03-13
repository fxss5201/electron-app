import { BrowserWindow } from 'electron';
import path from 'node:path';
import type { BaseWindowConstructorOptions, BrowserWindowConstructorOptions } from 'electron/main';
import icon from './../../assets/icons/icon.png';

function createWindow (config: BaseWindowConstructorOptions) {
  const defaultConfig: BrowserWindowConstructorOptions = {
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  }

  if (process.platform === 'linux') {
    defaultConfig.icon = icon
  }

  const configs: BrowserWindowConstructorOptions = { ...defaultConfig, ...config  }

  // Create the browser window.
  const win = new BrowserWindow(configs);
  
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    win.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  win.on('ready-to-show', () => {
    win.show()
  })

  return win
}

export default createWindow;
