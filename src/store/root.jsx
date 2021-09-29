import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Provider from "./provider";
import Login from "../App";
import Private from "./routes/private";

const PageRoot = () => (
    <Router>
        <Switch>
            <Route path="../App" component={Login} />
            <RoutesPrivate path="../home.html" component={Home} />
        </Switch>
    </Router>
)

export default PageRoot;