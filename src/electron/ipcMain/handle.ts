import { ipcMain } from 'electron';
import { pingHandle } from './handle/pingHandle.ts';

export function addIpcMainHandleFn () {
  ipcMain.handle('ping', pingHandle)
}

export function removeIpcMainHandlerFn () {
  ipcMain.removeHandler('ping')
}
