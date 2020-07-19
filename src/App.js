import React from 'react';
import General from "../src/Pages/General"
import Pagos from "./Pages/Pagos";
import Ventas from "./Pages/Ventas";
import Login from "./Pages/Login";
import NewProduct from "./Pages/NewProduct"
import Change from "./Pages/Change";

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
                <Route path="/NewProduct">

                    <div>
                        <NewProduct/>
                    </div>

                </Route>
                <Route path="/Change">
                    <Change/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
