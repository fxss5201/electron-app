import { Tray, nativeImage, Menu } from 'electron';
import { isMac, getFilePath } from './../utils/index';
import store from './../stores/index';
import createLoginWindow from './../windows/loginWindow';

export default function createTray (win: Electron.CrossProcessExports.BrowserWindow): Tray {
  const icon = nativeImage.createFromPath(getFilePath('icons/icon.png'));
  const tray = new Tray(icon);
  const trayMenu = Menu.buildFromTemplate([
    {
      label: '打开主窗口',
      click: () => {
        win.show();
      }
    },
    {
      label: '退出登录',
      click: () => {
        store.set('user', {
          account: '',
          password: ''
        })
        win.close();
        createLoginWindow();
      }
    },
    { type: 'separator' },
    {
      label: '关闭app',
      role: isMac ? 'close' : 'quit'
    }
  ])
  tray.setTitle('electron-app');
  tray.setToolTip('electron-app');
  tray.setContextMenu(trayMenu);
  tray.on('click', () => {
    win.show();
  })
  return tray;
}
