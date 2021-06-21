import React from "react";
import { Box, Typography } from "@material-ui/core";

export function Footer() {
  return (
    <Box textAlign="center">
      <Typography color="primary" variant="body1" noWrap>
        Made in 🇨🇦 with
        <Typography color="secondary" component="span">
          <i className="fas fa-heart" />
        </Typography>
      </Typography>
    </Box>
  );
}
