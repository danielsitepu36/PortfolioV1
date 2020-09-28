import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.spreadIt,
});

class Project extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.Home}>Project Under development</div>;
  }
}

export default withStyles(styles)(Project);
