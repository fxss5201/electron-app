import { nativeTheme } from 'electron';
import store from './index.ts';

const theme = store.get('theme');
if (theme) {
  nativeTheme.themeSource = theme || 'system';
}
