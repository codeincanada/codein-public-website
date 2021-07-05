import Layout from "../components/layout";
import FormWithEmailInput from "../components/FormWithEmailInput";
import { Grid } from "@material-ui/core";
import {
  DateComponent,
  TimeComponent,
} from "../components/experimentsComponent";
import { BJJ } from "../components/BJJ";

export const EXPERIMENTS = {
  TIME: "time_component",
  DATE: "date_component",
  LOGIN_FORM: "Login_form",
  SOCIAL_MEDIA_LINKS: "social_media_links",
  MOBILE_ONLY_FOOTER_CONTROLS: "mobile_only_footer_controls",
};

export default function Home() {
  return (
    <Layout>
      <Grid container direction={"column-reverse"} alignItems={"center"}>
        <FormWithEmailInput />
        <TimeComponent />
        <DateComponent />
        <BJJ></BJJ>
      </Grid>
    </Layout>
  );
}
