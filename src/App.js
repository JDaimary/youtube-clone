import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Contents />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
