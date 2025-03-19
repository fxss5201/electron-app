import { ipcMain } from 'electron';
import { startProgressBar, pauseProgressBar, resumeProgressBar, resetProgressBar } from '../functional/progressBar.ts';
import { startFlashFrame, stopFlashFrame } from '../functional/flashFrame.ts';
import { startFlashTray, stopFlashTray } from '../functional/flashTray.ts';
import { setDarkMode } from './onFn/setDarkMode.ts';
import { sendNotification } from './onFn/sendNotification.ts';

export function addIpcMainOnFn (win: Electron.CrossProcessExports.BrowserWindow, tray: Electron.Tray) {
  ipcMain.on('setDarkMode', setDarkMode)
  ipcMain.addListener('sendNotification', sendNotification)

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

  ipcMain.addListener('startFlashFrame', () => {
    startFlashFrame(win); 
  })
  ipcMain.addListener('stopFlashFrame', () => {
    stopFlashFrame(win); 
  })

  ipcMain.addListener('startFlashTray', (event: Electron.IpcMainEvent, time: number) => {
    startFlashTray(tray, time); 
  })
  ipcMain.addListener('stopFlashTray', () => {
    stopFlashTray(tray);
  })
}

export function removeIpcMainOnFn () {
  ipcMain.off('setDarkMode', setDarkMode);
  ipcMain.removeListener('sendNotification', sendNotification);

  ipcMain.removeAllListeners('startProgressBar');
  ipcMain.removeAllListeners('pauseProgressBar');
  ipcMain.removeAllListeners('resumeProgressBar');
  ipcMain.removeAllListeners('resetProgressBar');

  ipcMain.removeAllListeners('startFlashFrame');
  ipcMain.removeAllListeners('stopFlashFrame');

  ipcMain.removeAllListeners('startFlashTray');
  ipcMain.removeAllListeners('stopFlashTray');
}

