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
      <Box textAlign="center">
        <Typography color="secondary" variant="body1" noWrap>
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
    </>
  );
}
