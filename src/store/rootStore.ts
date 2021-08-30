import AppStore from "./appStore";
import React from "react";

class RootStore {
  appStore = new AppStore(); // app当前状态信息
  // ...其他分模块管理的信息
}

const rootStore = new RootStore();

export const storeContext = React.createContext<RootStore>(rootStore);
export const useStore = () => React.useContext<RootStore>(storeContext);
