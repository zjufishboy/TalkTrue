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

export const App:React.FC=()=>{
    return (
        <div
            className="appOutSide"
        >
            <Mobile height={667} width={375}>
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
            </Mobile>
            
        </div>
    )
}
//这个文件是管理应用路径用的