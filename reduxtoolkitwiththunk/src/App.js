import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import MoviesDetails from "./components/MovieDetails/MoviesDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/movie/:imdbID" component={MoviesDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
