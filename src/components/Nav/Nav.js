import React from "react";
import { AcUnitRounded as AcUnitRoundedIcon } from "@material-ui/icons";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Ini Logo</Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
