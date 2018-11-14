import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import H1 from "../../generic/typography/H1";
import H2 from "../../generic/typography/H1";
import { Tabs } from '@material-ui/core';
import NavTab from '../../generic/nav/NavTab';
import * as Routes from "../../flowLogic/Router/routeNames";
const Header = ({ classes }) => {
    const [value, setValue] = useState(0);

    const handleChangeValue = (event, v) => {
        setValue(v);
    }
    return (
        <Card className={classes.root} component="header" elevation={6}>
            <H1>QuarterCog</H1>
            <H2 component="p">Web development solutions </H2>
            <nav>
                <Tabs
                    value={value}
                    onChange={handleChangeValue}
                    indicatorColor="secondary"
                >
                    <NavTab
                        label="home"
                        value={0}
                        to={Routes.HOME} />

                    <NavTab
                        label="about"
                        value={1}
                        to={Routes.ABOUT} />

                </Tabs>
            </nav>
        </Card >);
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
});

export default withStyles(styles)(
    Header
);
