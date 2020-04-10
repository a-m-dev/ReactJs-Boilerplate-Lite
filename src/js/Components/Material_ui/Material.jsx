import "date-fns";
import React, { useState, useReducer } from "react";
import clsx from "clsx";
import {
  TextField,
  Paper,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Inbox, Mail } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  SignupForm,
  SignupFormWithContextMock,
} from "../_shared/Signup/SignupForm";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 900,
    padding: theme.spacing(3),
    // margin: theme.spacing(2, 0),
  },
  list: { width: 200 },
  fullList: { width: "auto" },
}));

export default function Material_UI(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Hi there
      </Typography>
      <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae
        placeat, odio molestias ut vero! Temporibus fugiat quis asperiores
        culpa, beatae nisi excepturi aliquid exercitationem iusto doloribus ea
        unde facere rem consequatur minus error quia accusantium in explicabo
        cum. Provident!
      </Typography>
      <hr />
      <SignupForm />
      <hr />
      <SignupFormWithContextMock />
    </Paper>
  );
}
