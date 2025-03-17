import { nativeTheme } from 'electron';
import store from './index.ts';

const theme = store.get('theme');
console.log('theme', theme);
if (theme) {
  nativeTheme.themeSource = theme;
}
