import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";

const _styles = makeStyles({
  root: {
    backgroundImage: "linear-gradient(to top, #fff 0%, #5a687f 100%)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  textRoot: {
    fontSize: "10px",
  },
  label: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
});

export function Footer() {
  const styles = _styles();
  return (
    <Box className={styles.root}>
      <Box textAlign="center" color="white">
        <Typography
          component="span"
          classes={{
            root: styles.textRoot,
          }}
        >
          Made in 🇨🇦 with <i className="fas fa-heart" />
        </Typography>
      </Box>
      <BottomNavigation>
        <BottomNavigationAction
          classes={{
            label: styles.label,
          }}
          label="Favorites"
          icon={<i className="fa fa-heart" />}
          showLabel
        />
        <BottomNavigationAction
          classes={{
            label: styles.label,
          }}
          label="Add"
          icon={<i className="fas fa-plus" />}
          showLabel
        />
        <BottomNavigationAction
          classes={{
            label: styles.label,
          }}
          label="Delete"
          icon={<i className="fas fa-trash-alt" />}
          showLabel
        />
      </BottomNavigation>
    </Box>
  );
}
