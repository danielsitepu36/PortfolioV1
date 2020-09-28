import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";

import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  ...theme.spreadIt,
});

class Skill extends Component {
  render() {
    const { classes } = this.props;
    const progress = 50;
    return <div className={classes.Home}>Skill Under development</div>;
  }
}

export default withStyles(styles)(Skill);
