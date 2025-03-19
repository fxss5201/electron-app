import { updateElectronApp, UpdateSourceType } from 'update-electron-app';
import log from 'electron-log/main';

function updateApp () {
  updateElectronApp({
    updateSource: {
      type: UpdateSourceType.ElectronPublicUpdateService,
      repo: 'fxss5201/electron-app'
    },
    updateInterval: '1 hour',
    logger: log
  })
}

export default updateApp;
