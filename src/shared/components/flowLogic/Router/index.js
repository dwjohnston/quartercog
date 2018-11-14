import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import * as Routes from "./routeNames";
import Home from '../../routes/Home';
import About from '../../routes/About';
import NotFound from '../../routes/NotFound';
const Router = ({ }) => {
    return (
        <Switch>
            <Route exact path={Routes.HOME} component={Home} />
            <Route path={Routes.ABOUT} component={About} />
            <Route component={NotFound} />
        </Switch>
    );
};

const styles = {
    root: {},
};

export default withStyles(styles)(
    Router
);
