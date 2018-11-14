import React, { Component } from 'react';

import Helmet from 'react-helmet';

import { Typography, Card, withStyles } from '@material-ui/core';

import Header from './components/layout/Header';
import Router from './components/flowLogic/Router';


/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * This is also the entry point for react router, declare any
 * of your top-level routes here.
//  */
// @connect(mapStateToProps, {
//     addTodo
// })
class App extends Component {

    render() {

        return (<>


            <Helmet>
                <title>App Component | React Universal</title>
            </Helmet>

            <Header />

            <Router />

        </>

        );
    }
}

const styles = theme => ({
    root: {

    },

    card: {
        padding: 20,
    }
})

export default withStyles(styles)(App);
