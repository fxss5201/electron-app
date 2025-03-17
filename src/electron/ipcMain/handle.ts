import { ipcMain } from 'electron';

export function addIpcMainHandleFn () {
  ipcMain.handle('ping', () => {
    return 'pong'
  })
}
