import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import ProductListing from "./containers/ProductListing"
import ProductDetails from "./containers/ProductDetails"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
