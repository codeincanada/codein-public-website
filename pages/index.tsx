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
      <Grid container direction={"column-reverse"} alignItems={"center"}>
        <FormWithEmailInput />
        <TimeComponent />
        <DateComponent />
      </Grid>
    </Layout>
  );
}
