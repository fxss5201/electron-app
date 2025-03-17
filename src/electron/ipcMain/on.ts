import { ipcMain, nativeTheme } from 'electron';
import store from './../stores/index.ts';

export function addIpcMainOnFn () {
  ipcMain.on('setDarkMode', (_event, val) => {
    if (val) {
      nativeTheme.themeSource = 'dark' 
    } else {
      nativeTheme.themeSource = 'light' 
    }
    store.set('theme', nativeTheme.themeSource)
  })
}
