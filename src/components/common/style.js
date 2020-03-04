import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";

export const red = "linear-gradient(60deg, #e61a53, #E64241)";

export const orange = "linear-gradient(60deg, #F99630, #f98608)";
export const blue = "linear-gradient(60deg, #31BFD2, #277bd2);";
const purple = "linear-gradient(60deg, #ab47bc, #8e24aa)";

export const HeadLine = styled.div`
  background: ${({ background }) => background || purple};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(156, 39, 176, 0.4);
  padding: 15px;

  margin-top: -25px;
  margin-bottom: 25px;
  border-radius: 3px;
  color: white;
`;

export const classesStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
