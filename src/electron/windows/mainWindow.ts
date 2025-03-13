import { ipcMain } from 'electron';
import createWindow from './createWindow';
import type { RouterMessage } from './../../types/routerTypes';

function createMainWindow () {
  const mainWindow = createWindow({
    title: '主窗口',
    width: 800,
    height: 600,
    resizable: false,
  })

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('router', {
      type: 'replace',
      router: {
        path: '/home'
      }
    } as RouterMessage)
  })

  ipcMain.once('open-window', () => {
    createMainWindow();
  })

  return mainWindow
}

export default createMainWindow;
