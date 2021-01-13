import React, { Fragment, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "views/Components/Loading/Loading";

import "assets/scss/material-kit-react.scss?v=1.9.0";
import Eror404 from "views/Components/Error404/Error404";
// pages for this product
import Components from "views/Components/Components.js";

ReactDOM.render(
  <BrowserRouter>
    <Suspense
      fallback={
        <Fragment>
          <Loading />
        </Fragment>
      }
    ></Suspense>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Components} />
        <Route component={Eror404} />
      </Switch>
    </BrowserRouter>
  </BrowserRouter>,
  document.getElementById("root")
);
