import { Notification, nativeImage } from 'electron';
import { getFilePath } from './../../utils/index';

type NotificationForm = {
  title: string,
  body: string,
  icon?: string
}
export function sendNotification (event: Electron.IpcMainEvent, form: NotificationForm) {
  const icon = nativeImage.createFromPath(getFilePath('icons/icon@16x.png'));
  const notification = new Notification({
    title: form.title,
    body: form.body,
    icon
  }).show();
}
