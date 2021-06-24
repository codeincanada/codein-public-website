import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255,255,255, 0.75)",
    margingTop: theme.spacing(3),
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.95)",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function AvatarIcon() {
  return <i className="far fa-user" />;
}

const FormWithEmailInput = () => {
  const classes = useStyles();
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  useEffect(() => {
    setHasError(false);
  }, []);

  const ERRORS = {
    EMPTY: "Email cannot be empty.",
    INITIAL_STATE: "Enter your email",
  };

  function handleError(errorMessage: string) {
    const _ = [...errorMessages];
    _.push(errorMessage);
    setErrorMessages(_);
  }

  function handleGoodInput() {
    setHasError(false);
    setErrorMessages([]);
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    target.value === "" ? handleError(ERRORS.EMPTY) : handleGoodInput();
  }

  function handleOnBlur(event: FocusEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    target.value === "" ? handleError(ERRORS.EMPTY) : setHasError(false);
  }

  useEffect(() => {
    setHasError(errorMessages.length > 0);
  }, [errorMessages]);

  return (
    <div className={classes.root}>
      <FormControl error={hasError} className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
          {errorMessages.length > 0 ? errorMessages[0] : ERRORS.INITIAL_STATE}
        </InputLabel>
        <Input
          id="input-avatar"
          startAdornment={
            <InputAdornment position="start">
              <AvatarIcon />
            </InputAdornment>
          }
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
      </FormControl>
    </div>
  );
};

export default FormWithEmailInput;
