import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { blue, classesStyle, HeadLine, orange, red } from "../../common/style";

import AfSwitch from "./AfSwitch";
import AfTooltip from "./AfTooltip";
import SimpleTable from "../../dashboard/SimpleTable";
import AfCard from "./AfCard";

const AppsFlyer = () => {
  const classes = classesStyle();

  return (
    <>
      <h1>AppsFlyer</h1>

      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <HeadLine background={red}>
              <h2>Tooltip</h2>
            </HeadLine>
            <AfTooltip />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <HeadLine background={orange}>
              <h2>Switch</h2>
            </HeadLine>
            <AfSwitch />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <HeadLine background={blue}>
              <h2>Card</h2>
            </HeadLine>
            <AfCard />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AppsFlyer;
