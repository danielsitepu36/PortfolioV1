import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import SimpleMenu from "./SimpleMenu";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  ...theme.spreadIt,
  appbar: {
    background: "white",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  toolbar: {
    paddingLeft: "15%",
    paddingRight: "15%",
    color: "#616161",
  },
  button: {
    margin: "auto 10px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "& p:hover": {
      borderBottom: "2px solid #8E2DE2",
    },
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

class Navbar extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleDrawerToggle = (event) => {
    this.setState((state) => ({
      mobileOpen: !state.mobileOpen,
      anchor: event.currentTarget,
    }));
  };

  handleClick = (event) => {
    this.setState((state) => ({
      mobileOpen: !state.mobileOpen,
      anchor: event.currentTarget,
    }));
  };

  handleClose = () => {
    this.setState((state) => ({
      mobileOpen: !state.mobileOpen,
      anchor: null,
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              Daniel Suranta Sitepu
            </Typography>
            <Button
              color="inherit"
              className={classes.button}
              component={Link}
              to="/"
            >
              <p>Home</p>
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              component={Link}
              to="/skill"
            >
              <p>Skill</p>
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              component={Link}
              to="/project"
            >
              <p>Project</p>
            </Button>
            <SimpleMenu />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
