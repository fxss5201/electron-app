import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import fs from 'node:fs';
import started from 'electron-squirrel-startup';
import log from 'electron-log/main';
import updateApp from './electron/functional/updateApp';
import createLoginWindow from './electron/windows/loginWindow';
import createMainWindow from './electron/windows/mainWindow';
import store from './electron/stores';
import './electron/stores/addStore';
import dayjs from 'dayjs';

log.initialize();
log.transports.file.resolvePathFn = () => {
  const logDir = path.join(app.getPath('userData'), 'logs');
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  return path.join(logDir, `log-${dayjs().format('YYYY-MM-DD')}.log`);
};
log.info('Log from the main process');

updateApp();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

function createWindow () {
  if (store.get('user').account) {
    createMainWindow();
  } else {
    createLoginWindow();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
