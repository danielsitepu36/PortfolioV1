import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.spreadIt,
});

class Skill extends Component {
  render() {
    const { classes } = this.props;
    return <div>SkillPage</div>;
  }
}

export default withStyles(styles)(Skill);
