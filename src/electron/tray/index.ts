import { Tray, nativeImage, Menu, app } from 'electron';
import path from 'node:path';
import { isMac } from './../utils/index';

export default function createTray (win: Electron.CrossProcessExports.BrowserWindow): Tray {
  const iconPatg = app.isPackaged ? path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/icons/icon.png`) : path.join(__dirname, './icons/icon.png');
  const icon = nativeImage.createFromPath(iconPatg);
  const tray = new Tray(icon);
  const trayMenu = Menu.buildFromTemplate([
    {
      label: '打开主窗口',
      click: () => {
        win.show();
      }
    },
    {
      label: '关闭app',
      role: isMac ? 'close' : 'quit'
    }
  ])
  tray.setTitle('electron-app');
  tray.setToolTip('electron-app');
  tray.setContextMenu(trayMenu);
  return tray;
}
