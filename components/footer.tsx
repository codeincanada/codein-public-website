import React, { useContext } from "react";
import { SplitContext, useTreatments } from "@splitsoftware/splitio-react";
import { EXPERIMENTS } from "../pages";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Box,
} from "@mui/material";
// import styles = module;
//
// const _styles = makeStyles({
//   root: {
//     backgroundImage: "linear-gradient(to top, #000 0%, #5a687f 100%)",
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   textRoot: {
//     fontSize: "10px",
//   },
//   label: {
//     paddingTop: theme.spacing(2),
//     [theme.breakpoints.down("xs")]: {
//       display: "none",
//     },
//   },
// });

export function Footer() {
  // const styles = _styles();
  // FEATURE FLAG: mobile_only_footer_controls
  const { isReadyFromCache, isReady } = useContext(SplitContext);
  const treatments = useTreatments([EXPERIMENTS.MOBILE_ONLY_FOOTER_CONTROLS]);
  const treatmentConfig = treatments[EXPERIMENTS.MOBILE_ONLY_FOOTER_CONTROLS];
  return (
    // <Box className={styles.root}>
    <Box>
      <Box textAlign="center" color="white">
        <Typography
          component="span"
          // classes={{
          //   root: styles.textRoot,
          // }}
        >
          Made in 🇨🇦 with <i className="fas fa-heart" />
        </Typography>
      </Box>
      {(isReadyFromCache || isReady) && treatmentConfig.treatment === "on" ? (
        <BottomNavigation>
          <BottomNavigationAction
            // classes={{
            //   label: styles.label,
            // }}
            label="Favorites"
            icon={<i className="fa fa-heart" />}
            showLabel
          />
          <BottomNavigationAction
            // classes={{
            //   label: styles.label,
            // }}
            label="Add"
            icon={<i className="fas fa-plus" />}
            showLabel
          />
          <BottomNavigationAction
            // classes={{
            //   label: styles.label,
            // }}
            label="Delete"
            icon={<i className="fas fa-trash-alt" />}
            showLabel
          />
        </BottomNavigation>
      ) : null}
    </Box>
  );
}
