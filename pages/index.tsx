import Layout from "../components/layout";
import { Box, Typography } from "@material-ui/core";

export default function Home() {
  return (
    <Layout>
      <Typography color="secondary" variant="h1">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor={"tomato"}
          maxHeight={"0.5em"}
          maxWidth={"1.1em"}
        >
          <i className="fas fa-battery-empty" />
        </Box>
      </Typography>
    </Layout>
  );
}
