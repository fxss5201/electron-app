import { ipcMain } from 'electron';
import { startProgressBar, pauseProgressBar, resumeProgressBar, resetProgressBar } from '../functional/progressBar.ts';
import { setDarkMode } from './onFn/setDarkMode.ts';


export function addIpcMainOnFn (win: Electron.CrossProcessExports.BrowserWindow) {
  ipcMain.on('setDarkMode', setDarkMode)

  ipcMain.addListener('startProgressBar', () => {
    startProgressBar(win);
  })
  ipcMain.addListener('pauseProgressBar', () => {
    pauseProgressBar(win);
  })
  ipcMain.addListener('resumeProgressBar', () => {
    resumeProgressBar(win);
  })
  ipcMain.addListener('resetProgressBar', () => {
    resetProgressBar(win);
  })
}

export function removeIpcMainOnFn () {
  ipcMain.off('setDarkMode', setDarkMode);
  ipcMain.removeAllListeners('startProgressBar');
  ipcMain.removeAllListeners('pauseProgressBar');
  ipcMain.removeAllListeners('resumeProgressBar');
  ipcMain.removeAllListeners('resetProgressBar');
}

