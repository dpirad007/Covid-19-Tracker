import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const Navbar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                COVID-Tracker
            </Typography>
            <Button color="inherit" component={Link} to="/global">Global</Button>
            <Button color="inherit" component={Link} to="/maharastra">Maharastra</Button>
        </Toolbar>
        </AppBar>

    )
}

export default Navbar;