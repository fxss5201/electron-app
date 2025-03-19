import { Notification, nativeImage, app } from 'electron';
import path from 'node:path';

type NotificationForm = {
  title: string,
  body: string,
  icon?: string
}
export function sendNotification (event: Electron.IpcMainEvent, form: NotificationForm) {
  const iconPatg = app.isPackaged ? path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/icons/icon@16x.png`) : path.join(__dirname, './icons/icon@16x.png');
  const icon = nativeImage.createFromPath(iconPatg);
  const notification = new Notification({
    title: form.title,
    body: form.body,
    icon
  }).show();
}
