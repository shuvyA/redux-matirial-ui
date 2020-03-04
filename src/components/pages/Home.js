import React, { useEffect } from "react";
import UsersList from "./users/UsersList";
import { classesStyle, HeadLine, orange } from "../common/style";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import PieChartWithCustomizedLabel from "../dashboard/charts/PieChartWithCustomizedLabel";
// import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

import values from "lodash/fp/values";

let dataInPie = [
  { name: "0-15", number: 15, value: 0 },
  { name: "15-30", number: 30, value: 0 },
  { name: "30-50", number: 50, value: 0 },
  { name: "50-100", number: 100, value: 0 }
];
const Home = ({ users }) => {
  const classes = classesStyle();

  useEffect(() => {
    values(users).map(user => {
      return dataInPie.some((field, index) => {
        if (user.age < field.number) {
          dataInPie[index].value = dataInPie[index].value + 1;
        }
      });
    });
  }, [users]);

  return (
    <div>
      <h1>Home</h1>
      <Paper className={classes.paper}>
        <HeadLine background={orange}>
          <h2>Users</h2>
        </HeadLine>
        <UsersList />
      </Paper>

      <Paper className={classes.paper}>
        <HeadLine background={orange}>
          <h2>Pie - Age</h2>
        </HeadLine>
        <PieChartWithCustomizedLabel data={dataInPie} />
      </Paper>
    </div>
  );
};

// const Container = styled.div`
// background-color: ${props => {
//   console.log(props);
//   return props.theme.palette.primary.main;
// }};
// color: white;
// `;

// export default Home;

const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(mapStateToProps)(Home);
