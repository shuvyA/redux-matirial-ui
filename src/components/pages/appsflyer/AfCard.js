import React from "react";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppleIcon from "@material-ui/icons/Apple";

import AndroidIcon from "@material-ui/icons/Android";

import angryBirdsImage from "./../../../assets/img/angry-birds.png";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128,
    position: "relative"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  icon: {
    position: "absolute",
    right: 5,
    bottom: 5
  }
}));

const AfCard = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  alt="angry-birds"
                  className={classes.img}
                  src={angryBirdsImage}
                />

                <AppleIcon className={classes.icon} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Angry Birds
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <MoreHorizIcon />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default AfCard;
