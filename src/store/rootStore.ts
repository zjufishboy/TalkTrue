import AppStore from './appStore';
import { createContext } from 'react';

const RootStore={
    appStore:new AppStore(), // app当前状态信息
    // ...其他分模块管理的信息
}
export const storeContext=createContext(RootStore);
export const Provider=storeContext.Provider;

export default RootStore;