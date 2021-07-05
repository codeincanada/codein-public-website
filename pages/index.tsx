import Layout from "../components/layout";
import FormWithEmailInput from "../components/FormWithEmailInput";
import { Grid } from "@material-ui/core";
import {
  DateComponent,
  TimeComponent,
} from "../components/experimentsComponent";

export const EXPERIMENTS = {
  TIME: "time_component",
  DATE: "date_component",
  LOGIN_FORM: "Login_form",
};

export default function Home() {
  return (
    <Layout>
      <Grid container direction={"column-reverse"} alignItems={"center"}>
        <FormWithEmailInput />
        <TimeComponent />
        <DateComponent />
      </Grid>
    </Layout>
  );
}
