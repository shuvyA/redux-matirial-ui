import React, { useState } from "react";

import Header from "./Header";
import Content from "./Content";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

const Main = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#18202c"
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        contrastText: "#ffcc00"
      },
      error: {
        main: "#f44336"
      },
      warning: {
        main: "#ff9800"
      },
      info: {
        main: "#2196f3"
      },

      contrastThreshold: 3,
      tonalOffset: 0.2
    },
    overrides: {
      MuiDrawer: {
        paper: {
          background: "#18202c",
          // this is where magic happens
          "& *": { color: "rgba(255, 255, 255, 0.7)" }
        }
      }
      // MuiDivider: {
      //   color: "rgba(255, 255, 255, 0.7)",
      //   background: "rgba(255, 255, 255, 0.7)"
      // }
    }
  });

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <div className={classes.root}>
          <Header setOpen={setOpen} open={open} />
          <Content open={open} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default Main;
