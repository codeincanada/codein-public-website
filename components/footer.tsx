import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@material-ui/core";

export function Footer() {
  return (
    <>
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
      <Box textAlign="center" bgcolor="black" padding="1em 0">
        <Typography color="primary" variant="body1" noWrap>
          Made in 🇨🇦 with
          <Typography color="secondary" component="span">
            <i className="fas fa-heart" />
          </Typography>
        </Typography>
      </Box>
    </>
  );
}
