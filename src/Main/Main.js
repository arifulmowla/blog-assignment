import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SingleBlog from "../SingleBlog/SingleBlog";
import Header from "../Header/Header";
import Blogs from "../Blogs/Blogs";

const Main = () => {
  return (
    <>
      {/* Router Section */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Blogs></Blogs>
          </Route>
          <Route path="/blog/:blogId">
            <SingleBlog></SingleBlog>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Main;
