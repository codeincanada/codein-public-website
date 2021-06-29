import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const _styles = makeStyles({
  root: {
    backgroundImage: "linear-gradient(to top, #fff 0%, #5a687f 100%)",
  },
});

export function Footer() {
  const styles = _styles();
  return (
    <Box className={styles.root}>
      <Box textAlign="center" color="white">
        <Typography variant="body1" noWrap>
          Made in 🇨🇦 with{" "}
          <Typography component="span">
            <i className="fas fa-heart" />
          </Typography>
        </Typography>
      </Box>
      <BottomNavigation>
        <BottomNavigationAction
          label="Favorites"
          icon={<i className="fa fa-heart" />}
        />
        <BottomNavigationAction
          label="Add"
          icon={<i className="fas fa-plus" />}
        />
        <BottomNavigationAction
          label="Delete"
          icon={<i className="fas fa-trash-alt" />}
        />
      </BottomNavigation>
    </Box>
  );
}
