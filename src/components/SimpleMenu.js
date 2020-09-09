import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme) => ({
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

function SimpleMenu({ classes }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        aria-label="Open drawer"
        onClick={handleClick}
        className={classes.navIconHide}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/skill">
          Skill
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/project">
          Project
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withStyles(styles)(SimpleMenu);
