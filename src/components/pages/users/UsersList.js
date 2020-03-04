import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import values from "lodash/fp/values";
import { connect } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const UsersList = ({ users }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            values(users).map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(mapStateToProps)(UsersList);
