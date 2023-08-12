import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import HomeDetail from "./pages/HomeDetail";
import Contribute from "./pages/Contribute";
import ReviewDetail from "./pages/ReviewDetail";
import Review from "./pages/Review";

const App = (): JSX.Element => {
  const id = sessionStorage.getItem("id");
  const homeURL = process.env.PUBLIC_URL ?? "";

  if (id !== null) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={homeURL + "/Signin"}>
            <Redirect to={homeURL + "/Home"} />
          </Route>
          <Route path={homeURL + "/Signup"}>
            <Redirect to={homeURL + "/Home"} />
          </Route>
          <Route path={homeURL + "/Home/:fileinfo"}>
            <HomeDetail />
          </Route>
          <Route path={homeURL + "/Home"}>
            <Home />
          </Route>
          <Route path={homeURL + "/Contribute"}>
            <Contribute />
          </Route>
          <Route path={homeURL + "/Review/:fileid"}>
            <ReviewDetail />
          </Route>
          <Route path={homeURL + "/Review"}>
            <Review />
          </Route>
          <Route path={homeURL + "/"}>
            <Redirect to={homeURL + "/Home"} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={homeURL + "/Signin"}>
            <Signin />
          </Route>
          <Route path={homeURL + "/Signup"}>
            <Signup />
          </Route>
          <Route path={homeURL + "/Home/detail"}>
            <Redirect to={homeURL + "/Signin"} />
          </Route>
          <Route path={homeURL + "/Home"}>
            <Redirect to={homeURL + "/Signin"} />
          </Route>
          <Route path={homeURL + "/Contribute"}>
            <Redirect to={homeURL + "/Signin"} />
          </Route>
          <Route path={homeURL + "/Review/:fileid"}>
            <Redirect to={homeURL + "/Signin"} />
          </Route>
          <Route path={homeURL + "/Review"}>
            <Redirect to={homeURL + "/Signin"} />
          </Route>
          <Route path={homeURL + "/"}>
            <Redirect to={homeURL + "/Signin"} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
