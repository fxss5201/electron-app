/// <reference types="vite/client" />
import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
  declare const MAIN_WINDOW_VITE_NAME: string;

  interface Window {
    electron: ElectronAPI;
    versions: {
      app: string;
      node: string;
      chrome: string;
      electron: string;
    }
  }
}
