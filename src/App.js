import React from "react";
import Homepage from "./components/Homepage"
import Secondpage from "./components/Secondpage"
import Greet from "./components/Greet"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {





  return (

    <Router>
      <Switch>
        <Route
          path="/" exact
          render={() =>
            (<Homepage />)
          } />

        <Route exact
          path="/:name"
          render={() =>
            (<Secondpage />)
          } />

        <Route
          path="/greet/:name"
          render={() =>
            (<Greet />)
          } />






      </Switch>


    </Router>
  );
}

export default App;
