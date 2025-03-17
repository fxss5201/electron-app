const isMac = process.platform === 'darwin'

function createMainMenu (mainWindow: Electron.CrossProcessExports.BrowserWindow): Array<(Electron.MenuItemConstructorOptions) | (Electron.MenuItem)> {
  return [
    {
      label: '菜单',
      submenu: [
        {
          label: '首页',
          click: () => {
            mainWindow.webContents.send('router', {
              type: 'replace',
              router: {
                path: '/home'
              }
            })
          }
        }, 
      ]
    },
    {
      label: '示例',
      submenu: [
        {
          label: '暗黑模式',
          click: () => {
            mainWindow.webContents.send('router', {
              type:'replace',
              router: {
                path: '/darkMode'
              }
            })
          }
        }, 
      ]
    },
    {
      label: '窗口',
      role: 'window',
      submenu: [
        {
          label: '最小化',
          role: 'minimize'
        },
        {
          label: '全屏',
          role: 'togglefullscreen'
        },
        {
          label: '退出',
          role: isMac ? 'close' : 'quit'
        }
      ]
    }
  ]
}

export default createMainMenu;
