import React, { useState } from "react";

import Header from "./Header";
import Content from "./Content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

const HomePage = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Header setOpen={setOpen} open={open} />
      <Content open={open} />
    </div>
  );
};

export default HomePage;
