import React, { FC, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import './app.less'
import { Mobile } from "./component/mobile";
import {Header} from '@/component/header'
import {Footer} from '@/component//footer'
import RootStore,{Provider}  from '@/store/rootStore'
import i18n from "./i18n/i18n";
import { observer } from "mobx-react";
import Teacher from "./pages/teacher";

const App:React.FC=()=>{
    useEffect(()=>{
        RootStore.appStore.fetchHistory();
    })
    return (
        <div
            className="appOutSide"
        >
            <Provider value={RootStore}>
            <Mobile height={667} width={375}>
                <Header height={40} fix>
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
                        <Route path="/teacher/:teacherID" exact>
                            <Teacher/>
                        </Route>
                    </Switch>
                </Router>
                <Footer height={40} fix>
                    底部
                </Footer>
            </Mobile>
            </Provider>
        </div>
    )
}

export default observer(App);
//这个文件是管理应用路径用的