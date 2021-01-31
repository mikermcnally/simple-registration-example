import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import RegistrationForm from "./registration/RegistrationForm";
import RegistrationList from "./registration/RegistrationList";

export default function RouterView() {
  return (
    <Grid container direction="column" spacing={2}>
      <Switch>
        <Route exact path="/registration">
          <RegistrationForm />
        </Route>
        <Route exact path="/admin/registrations">
          <RegistrationList />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Grid>
  );
}
