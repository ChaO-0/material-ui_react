import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Nav />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
