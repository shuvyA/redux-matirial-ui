import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import AddUserForm from "./AddUserForm";
import { HeadLine } from "../../common/style";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const AddUser = () => {
  const classes = useStyles();

  return (
    <>
      <h1>User</h1>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <HeadLine>
              <h3>Add user</h3>
            </HeadLine>
            <AddUserForm />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AddUser;
