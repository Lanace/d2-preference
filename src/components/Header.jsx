import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Header extends React.Component {
 
  render () {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">D2 Preference</Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;
