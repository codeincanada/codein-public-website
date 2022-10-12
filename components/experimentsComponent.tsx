import React, { ReactNode, useContext } from "react";
import { SplitContext, useTreatments } from "@splitsoftware/splitio-react";
import { EXPERIMENTS } from "../pages";
import { TreatmentWithConfig } from "@splitsoftware/splitio-react/types/splitio/splitio";
import { Typography } from "@mui/material";
/*

const useStyles = makeStyles((theme) => ({
  root: {},
  solidResult: {
    color: "white",
    fontWeight: "bold",
    fontSize: "small",
  },
  tempResult: {
    border: "2px dotted #f99",
    backgroundColor: "transparent",
    color: "white",
  },
  whiteText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
}));
*/

const ComponentBody = ({ content }: { content?: ReactNode }) => {
  // const classes = useStyles();
  return (
    // <Typography classes={{ root: classes.solidResult }}>{content}</Typography>
    <Typography>{content}</Typography>
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
      {
        treatment === "on" ? <ComponentBody content={children} /> : null
        /* <PlaceholderComponent
          variant={placeholderComponentVariants.TREATMENT_OFF}
        >
          {JSON.stringify(treatmentConfig)}
        </PlaceholderComponent>*/
      }
    </>
  );
}
/* const placeholderComponentVariants = {
  NOT_READY: "SPLIT SDK IS NOT READY",
  TREATMENT_OFF: "THIS EXPERIMENT IS OFF",
};*/

/* function PlaceholderComponent({
  children,
  variant,
}: {
  children?: ReactNode;
  variant: string;
}) {
  const classes = useStyles();
  return isProduction ? null : (
    <Box className={classes.tempResult}>
      <Typography
        classes={{
          root: classes.whiteText,
        }}
      >
        {variant}
      </Typography>
      <pre>{children}</pre>
    </Box>
  );
}*/

function TimeComponent() {
  const { isReadyFromCache, isReady } = useContext(SplitContext);
  const timeString = new Date(Date.now()).toTimeString();
  const treatments = useTreatments([EXPERIMENTS.TIME]);
  const treatmentConfig = treatments[EXPERIMENTS.TIME];
  return isReadyFromCache || isReady ? (
    <FeatureFlagReady treatmentConfig={treatmentConfig}>
      {timeString}
    </FeatureFlagReady>
  ) : null;
  // <PlaceholderComponent variant={placeholderComponentVariants.NOT_READY} />
}
function DateComponent() {
  const { isReadyFromCache, isReady } = useContext(SplitContext);
  const dateString = new Date(Date.now()).toDateString();
  const treatments = useTreatments([EXPERIMENTS.DATE]);
  const treatmentConfig = treatments[EXPERIMENTS.DATE];
  return isReadyFromCache || isReady ? (
    <FeatureFlagReady treatmentConfig={treatmentConfig}>
      {dateString}
    </FeatureFlagReady>
  ) : null;
}

export { TimeComponent, DateComponent };
