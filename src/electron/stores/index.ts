import Store from 'electron-store';
import type { StoreType } from './StoreType';

const store = new Store<StoreType>({
  defaults: {
    user: {
      account: '',
      password: ''
    } 
  }
  // encryptionKey: 'secret'
});

export default store;