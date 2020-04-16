import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./useStyles";

function CustomeButton(props) {
  const classes = useStyles(props);

  return (
    <Button className={classes.root} spacing={2}>
      This is my {props.color} button
    </Button>
  );
}

CustomeButton.propTypes = {
  color: PropTypes.oneOf(["blue", "red"]),
};

export default CustomeButton;
