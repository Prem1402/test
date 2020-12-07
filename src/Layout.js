import React from "react"
import Home from "./Home"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"
import { Switch, Route } from "react-router-dom"

export default function Layout(props) {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 auto",
  },
  menu: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#CCC",
    "& button": {
      margin: theme.spacing(1),
    },
  },
}))
