import { ipcMain } from 'electron';
import createWindow from './createWindow';
import createMainWindow from './mainWindow';
import type { RouterMessage } from './../../types/routerTypes';

function createLoginWindow () {
  const loginWindow = createWindow({
    title: '登录',
    width: 368,
    height: 320,
    resizable: false,
    center: true,
    closable: true,
    movable: true,
    frame: false,
  })

  loginWindow.setMenu(null)

  loginWindow.webContents.on('did-finish-load', () => {
    loginWindow.webContents.send('router', {
      type: 'replace',
      router: {
        path: '/login'
      }
    } as RouterMessage)
  })

  ipcMain.once('login', (event, ...form) => {
    console.log('form', form)
    loginWindow.close()
    createMainWindow()
  })

  return loginWindow
}

export default createLoginWindow;
