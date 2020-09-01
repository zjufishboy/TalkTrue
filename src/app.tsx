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
import { Header } from '@/component/header'
import { Footer } from '@/component//footer'
import RootStore, { Provider } from '@/store/rootStore'
import i18n from "./i18n/i18n";
import { observer } from "mobx-react";
import Teacher from "./pages/teacher";
import Course from "./pages/class";
import { DashBoard } from "./pages/components";
import { Nav } from "./biz-component/tt-nav";
import { About } from "./pages/about";

const PathCollections = {
    Moblie: [
        "/",
        "/search",
        "/about",
        "/teacher/:teacherID",
        "/course/:courseID",
    ],
    PC: [
        "/component/:ComponentName",
        "/component"
    ]
}

const AppMoblie: React.FC = () => {
    useEffect(() => {
        RootStore.appStore.fetchHistory();
    })
    return (
        <div
            className="appOutSide"
        >
            <Provider value={RootStore}>
                <Mobile height={"100%"} width={"100%"}>
                    <Header height={40} fix>
                        {i18n.intl(RootStore.appStore.pageNow)}
                    </Header>
                    <Router>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/search" exact>
                                <Search />
                            </Route>
                            <Route path="/about" exact>
                                <About />
                            </Route>
                            <Route path="/teacher/:teacherID" exact>
                                <Teacher />
                            </Route>
                            <Route path="/course/:courseID" exact>
                                <Course />
                            </Route>
                        </Switch>
                        <Footer height={54} fix>
                            <Nav />
                        </Footer>
                    </Router>

                </Mobile>
            </Provider>
        </div>
    )
}

const AppM = observer(AppMoblie);

const AppPC: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={PathCollections.Moblie} exact>
                    <AppM />
                </Route>
                <Route path={PathCollections.PC} exact render={() => <DashBoard />}>
                </Route>
            </Switch>
        </Router>
    );
}

export default observer(AppPC);
//这个文件是管理应用路径用的