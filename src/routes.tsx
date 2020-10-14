import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Orphanages from './pages/Orphanages';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={Orphanages} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;