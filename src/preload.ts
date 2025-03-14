import { contextBridge } from 'electron'
import { version } from './../package.json'
import { electronAPI } from '@electron-toolkit/preload'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('electron', electronAPI)

contextBridge.exposeInMainWorld('versions', {
  app: version,
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron
  // 除函数之外，我们也可以暴露变量
})
