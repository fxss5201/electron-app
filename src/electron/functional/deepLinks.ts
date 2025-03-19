import { app, dialog } from 'electron';
import path from 'node:path';

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('electron-app', process.execPath, [path.resolve(process.argv[1])])
  }
} else {
  app.setAsDefaultProtocolClient('electron-app')
}

app.on('open-url', (event, url) => {
  dialog.showErrorBox('欢迎回来', `导向自: ${url}`)
})
