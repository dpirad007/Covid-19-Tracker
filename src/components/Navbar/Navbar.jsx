import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const Navbar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                COVID-Tracker
            </Typography>
        </Toolbar>
        </AppBar>

    )
}

export default Navbar;