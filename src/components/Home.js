import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  ...theme.spreadIt,
  leftDiv: {
    margin: "60px auto",
  },
  rightDiv: {
    margin: "60px auto",
  },
  leftContent: {
    margin: "20px auto",
  },
  projectButton: {
    color: "white",
    background: "#8E2DE2" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #4A00E0, #8E2DE2)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #4A00E0, #8E2DE2)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    transition: "0.3s",
    "&:hover": {
      border: "solid #8E2DE2",
      background: "white",
      color: "black",
      borderRadius: "0px",
    },
  },
  bottomQuote: {
    textAlign: "center",
    marginTop: "50px",
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item sm={7} xs={12}>
            <div className={classes.leftDiv}>
              <Typography
                variant="caption"
                className={(classes.name, classes.leftContent)}
              >
                Hello, you can call me Daniel and I am a fullstack Web Developer
                from Indonesia
              </Typography>
              <Typography
                variant="h3"
                className={(classes.name, classes.leftContent)}
              >
                I will make a beautiful website only for you.
              </Typography>
              <Typography
                variant="body2"
                className={(classes.desc, classes.leftContent)}
              >
                1 year experience in website production and UI/UX, mainly use
                Node, React, Express, Firebase, and MongoDB for production
              </Typography>
              <Button className={classes.projectButton}>Contact Me</Button>
            </div>
          </Grid>
          <Grid item sm={5} xs={12}>
            <div className={classes.rightDiv}>Right Section</div>
          </Grid>
        </Grid>
        <Typography variant="body2" className={classes.bottomQuote}>
          Experience is my best teacher
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
