/// <reference types="vite/client" />

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

interface Window {
  ipcRenderer: import('electron').IpcRenderer
  versions: {
    app: string
    node: string
    chrome: string
    electron: string
  }
}
