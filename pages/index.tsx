import Layout from "../components/layout";
import FormWithEmailInput from "../components/FormWithEmailInput";
import {
  DateComponent,
  TimeComponent,
} from "../components/experimentsComponent";
import { Grid } from "@material-ui/core";

export const EXPERIMENTS = {
  TIME: "time_component",
  DATE: "date_component",
};

export default function Home() {
  return (
    <Layout>
      <FormWithEmailInput />
      <Grid
        container
        alignContent={"space-around"}
        justify={"space-around"}
        sm={8}
      >
        <TimeComponent />
        <DateComponent />
      </Grid>
    </Layout>
  );
}
