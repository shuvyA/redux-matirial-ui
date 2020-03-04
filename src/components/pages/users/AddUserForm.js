import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

import { addNewUser } from "../../../actions/users.actions";

const useStyles = makeStyles(theme => ({
  formText: {
    margin: theme.spacing(2),
    width: 200
  }
}));

const AddUserForm = props => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const payload = { firstName, email, lastName, city, company, age };
    props.addNewUser(payload);
    cleanForm();
  };

  const cleanForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setCity("");
    setAge("");
    setCompany("");
  };

  const isValidEmail = () => {
    /* eslint-disable */
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormContainer>
          <TextField
            className={classes.formText}
            id="standard-basic"
            label="firstName"
            value={firstName}
            onInput={e => setFirstName(e.target.value)}
          />
          <TextField
            className={classes.formText}
            id="lastName"
            label="Last-Name"
            value={lastName}
            onInput={e => setLastName(e.target.value)}
          />
        </FormContainer>
        <FormContainer>
          <TextField
            className={classes.formText}
            id="email"
            onInput={e => setEmail(e.target.value)}
            value={email}
            error={!isValidEmail()}
            label="E-mail"
          />
          <TextField
            className={classes.formText}
            id="city"
            onInput={e => setCity(e.target.value)}
            value={city}
            label="City"
          />
        </FormContainer>
        <FormContainer>
          <TextField
            className={classes.formText}
            id="company"
            value={company}
            onInput={e => setCompany(e.target.value)}
            label="Company"
          />
          <TextField
            className={classes.formText}
            id="age"
            value={age}
            onInput={e => setAge(e.target.value)}
            label="Age"
          />
        </FormContainer>
        <Button
          className={classes.formText}
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Send
        </Button>
      </form>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: payload => {
      dispatch(addNewUser(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
