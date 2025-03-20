import { app } from 'electron';
import path from 'node:path';

export const isMac = process.platform === 'darwin';

/**
 * 获取不同环境的资源路径
 * @param fileSrc 资源路径，相对于public目录
 * @returns 资源路径
 * 
 * @example
 * getFilePath('icons/icon.png')
 * // 就是获取 public/icons/icon.png 的路径
 */
export function getFilePath (fileSrc: string) {
  return app.isPackaged ? path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/${fileSrc}`) : path.join(__dirname, `./${fileSrc}`);
}
