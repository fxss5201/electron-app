import { ipcMain, nativeTheme } from 'electron';
import store from './../stores/index.ts';
import { startProgressBar, pauseProgressBar, resumeProgressBar, resetProgressBar } from './../plugins/progressBar.ts';

export function addIpcMainOnFn (win: Electron.CrossProcessExports.BrowserWindow) {
  ipcMain.on('setDarkMode', (_event, val) => {
    if (val) {
      nativeTheme.themeSource = 'dark'
    } else {
      nativeTheme.themeSource = 'light'
    }
    store.set('theme', nativeTheme.themeSource)
  })

  ipcMain.on('startProgressBar', () => {
    startProgressBar(win);
  })
  ipcMain.on('pauseProgressBar', () => {
    pauseProgressBar(win);
  })
  ipcMain.on('resumeProgressBar', () => {
    resumeProgressBar(win); 
  })
  ipcMain.on('resetProgressBar', () => {
    resetProgressBar(win);
  })
}
