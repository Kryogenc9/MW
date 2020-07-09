import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import General from "../src/Pages/General"
import av from "./CSS/Generalcss.module.css";
import Ventas from "../src/Pages/Ventas"


function App() {
  return (
        <Router>
          <Switch>
            <Route path="/HOME" >
                <div>
                    <General></General>
                </div>

            </Route>
            <Route path="/VENTAS">

              <div>
                  <Ventas/>
              </div>

            </Route>
          </Switch>
        </Router>
  );
}

export default App;
