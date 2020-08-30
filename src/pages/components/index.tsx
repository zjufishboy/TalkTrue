import React from 'react';
import './index.less';
import { Layout } from '@/layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DisplayRank } from './display/rank';
import { DisplayButton } from './display/button';
export const DashBoard: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Layout>
                    <div className="fish-content">

                        <Route path="/component/rank" exact component={DisplayRank}>
                        </Route>
                        <Route path="/component/button" exact component={DisplayButton}>
                        </Route>
                    </div>
                </Layout>
            </Switch>
        </Router>
    );
}