import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import StackedAreaChart from "./charts/StackedAreaChart";
import PieChartWithCustomizedLabel from "./charts/PieChartWithCustomizedLabel";
import SimpleTable from "./SimpleTable";
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { blue, classesStyle, HeadLine, orange, red } from "../common/style";

const dataInPie = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const Dashboard = () => {
  const classes = classesStyle();

  return (
    <>
      <h1>Dashboard</h1>

      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <HeadLine background={red}>
              <h2>Chart</h2>
            </HeadLine>
            <StackedAreaChart />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <HeadLine background={orange}>
              <h2>Pie</h2>
            </HeadLine>
            <PieChartWithCustomizedLabel data={dataInPie} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <HeadLine background={blue}>
              <h2>Table</h2>
            </HeadLine>
            <SimpleTable />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
