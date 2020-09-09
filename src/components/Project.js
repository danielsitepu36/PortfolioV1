import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.spreadIt,
});

class Project extends Component {
  render() {
    const { classes } = this.props;
    return <div>ProjectPage</div>;
  }
}

export default withStyles(styles)(Project);
