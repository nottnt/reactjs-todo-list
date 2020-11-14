import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundImage:
      "linear-gradient(140deg, #000000 0%, #333333 50%, #333333 75%)",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Nav = () => {
    const classes = UseStyles()

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} id="app-bar">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        To Do List.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
