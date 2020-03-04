import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Dashboard from "../dashboard/Dashboard";

// import styled from "@emotion/styled";
import Container from "@material-ui/core/Container";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import AddUser from "../pages/users/AddUser";
import AppsFlyer from "../pages/appsflyer/AppsFlyer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const Content = ({ open }) => {
  const classes = useStyles();
  return (
    <>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/add-user" component={AddUser} />
            <Route exact path="/about" component={About} />
            <Route exact path="/appsflyer" component={AppsFlyer} />
          </Switch>

          {/*<Dashboard />*/}
        </Container>
      </main>
    </>
  );
};

export default Content;
