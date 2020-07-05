import React, { FC } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Home } from "./pages/home";
import './app.less'
import { Mobile } from "./component/mobile";
import { Search } from "./pages/search";
import {Header} from '@/component/header'
import {Footer} from '@/component//footer'
import RootStore,{Provider}  from '@/store/rootStore'
import i18n from "./i18n/i18n";

export const App:React.FC=()=>{
    return (
        <div
            className="appOutSide"
        >
            <Provider value={RootStore}>
            <Mobile height={667} width={375}>
                <Header height={40}>
                    {i18n.intl(RootStore.appStore.pageNow)}
                </Header>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/search" exact>
                            <Search/>
                        </Route>
                    </Switch>
                </Router>
                <Footer height={40}>
                    底部
                </Footer>
            </Mobile>
            </Provider>
        </div>
    )
}
//这个文件是管理应用路径用的