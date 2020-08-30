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
import Course from "./pages/class";
import { DashBoard } from "./pages/components";

const PathCollections={
    Moblie:[
        "/",
        "/search",
        "/teacher/:teacherID",
        "/course/:courseID",
    ],
    PC:[
        "/component/:ComponentName",
        "/component"
    ]
}

const AppMoblie:React.FC=()=>{
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
                        <Route path="/course/:courseID" exact>
                            <Course/>
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

const AppM=observer(AppMoblie);

const AppPC:React.FC=()=>{
    return (
        <Router>
            <Switch>
                <Route path={PathCollections.Moblie} exact>
                    <AppM/>
                </Route>
                <Route path={PathCollections.PC} exact render={()=><DashBoard/>}>
                </Route>
            </Switch>
        </Router>
    );
}

export default observer(AppPC);
//这个文件是管理应用路径用的