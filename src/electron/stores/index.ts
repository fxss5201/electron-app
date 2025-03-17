import Store from 'electron-store';
import type { StoreType } from './StoreType';

const store = new Store<StoreType>({
  // encryptionKey: 'secret'
});

export default store;