import React from "react";
import { Box, Typography } from "@material-ui/core";

export function Footer() {
  return (
    <Box textAlign="center">
      <Typography color="primary" variant="body1">
        Made in 🇨🇦 with
        <Typography color="secondary" variant="body1">
          <i className="fas fa-heart" />
        </Typography>
      </Typography>
    </Box>
  );
}
