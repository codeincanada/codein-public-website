import React, { ReactNode, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { SplitContext, useTreatments } from "@splitsoftware/splitio-react";
import { EXPERIMENTS } from "../pages";
import { TreatmentWithConfig } from "@splitsoftware/splitio-react/types/splitio/splitio";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 30),
    border: "10px dashed gray",
    backgroundColor: "white",
  },
}));

const ComponentBody = ({ content }: { content?: ReactNode }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>{content}</Typography>
    </Box>
  );
};

function FeatureFlagReady({
  treatmentConfig,
  children,
}: {
  treatmentConfig: TreatmentWithConfig;
  children: ReactNode;
}) {
  const { treatment } = treatmentConfig;
  return (
    <>
      <h1>Split: {treatment}</h1>
      {treatment === "on" ? (
        <ComponentBody content={children} />
      ) : (
        <Skeleton variant={"rect"} animation={false}>
          <ComponentBody />
        </Skeleton>
      )}
    </>
  );
}

function TimeComponent() {
  const { isReady } = useContext(SplitContext);
  const timeString = new Date(Date.now()).toTimeString();
  const treatments = useTreatments([EXPERIMENTS.TIME]);
  const treatmentConfig = treatments[EXPERIMENTS.TIME];
  return isReady ? (
    <FeatureFlagReady treatmentConfig={treatmentConfig}>
      {timeString}
    </FeatureFlagReady>
  ) : (
    <>
      <h1>Split not ready</h1>
      <Skeleton variant={"rect"}>
        <ComponentBody />
      </Skeleton>
    </>
  );
}
function DateComponent() {
  const { isReady } = useContext(SplitContext);
  const dateString = new Date(Date.now()).toDateString();
  const treatments = useTreatments([EXPERIMENTS.DATE]);
  const treatmentConfig = treatments[EXPERIMENTS.DATE];
  return isReady ? (
    <FeatureFlagReady treatmentConfig={treatmentConfig}>
      {dateString}
    </FeatureFlagReady>
  ) : (
    <>
      <h1>Split not ready</h1>
      <Skeleton variant={"rect"}>
        <ComponentBody />
      </Skeleton>
    </>
  );
}

export { TimeComponent, DateComponent };
