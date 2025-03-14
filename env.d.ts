/// <reference types="vite/client" />
import { ElectronAPI } from '@electron-toolkit/preload'

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

declare global {
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
