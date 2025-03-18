import { ipcMain, Menu } from 'electron';
import createWindow from './createWindow';
import type { RouterMessage } from './../../types/routerTypes';
import createMainMenu from './../menu/mainMenu';
import { addIpcMainHandleFn, addIpcMainOnFn } from './../ipcMain/index.ts';
import registryShortcut from './../plugins/registryShortcut';
import createTray from './../tray';

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

    registryShortcut();
  })

  ipcMain.once('open-window', () => {
    createMainWindow();
  })

  createTray(mainWindow);
  addIpcMainHandleFn();
  addIpcMainOnFn(mainWindow);

  const mainMenu = createMainMenu(mainWindow);
  Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenu));

  return mainWindow
}

export default createMainWindow;
