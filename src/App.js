import React from 'react';
import General from "../src/Pages/General"
import Pagos from "./Pages/Pagos";
import Ventas from "./Pages/Ventas";
import Login from "./Pages/Login";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route  exact path="/">
                    <Login/>
                </Route>
                <Route path="/HOME">
                    <div>
                        <General></General>
                    </div>

                </Route>
                <Route path="/Ventas">
                    <Ventas/>
                </Route>
                <Route path="/PAGOS">

                    <div>
                        <Pagos/>
                    </div>

                </Route>
            </Switch>
        </Router>
    );
}

export default App;
