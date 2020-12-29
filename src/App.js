import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Legendaries from "./pages/Legendaries";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Pokedex">
            <Pokedex />
          </Route>
          <Route path="/Legendaries">
            <Legendaries />
          </Route>
          <Route path="/Documentaion"></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
