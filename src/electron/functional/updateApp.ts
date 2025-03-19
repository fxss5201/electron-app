import { updateElectronApp, UpdateSourceType, makeUserNotifier } from 'update-electron-app';
import log from 'electron-log/main';

function updateApp () {
  updateElectronApp({
    updateSource: {
      type: UpdateSourceType.ElectronPublicUpdateService,
      repo: 'fxss5201/electron-app'
    },
    updateInterval: '1 hour',
    logger: log,
    onNotifyUser: makeUserNotifier({
      title: '新版本',
      detail: '新版本已下载完成，是否立即更新？',
      restartButtonText: '立即更新',
      laterButtonText: '稍后更新'
    })
  })
}

export default updateApp;
