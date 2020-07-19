import React from "react";
import NavBar from "../Components/NavBar";
import vta from "../CSS/VentasCss.module.css"
import SearchBar from "../Components/SearchBar";
import Card from "react-bootstrap/Card";
import TablaVentas from "../Components/TablaVentas";
import Boton from "../Components/Button";
import {Link} from "react-router-dom";
import Modal from "../Mod/Modal";

//<Search size="1em" fill="#9AA0A8" name={vta.SearchIcon}/>
//<Link to="/Pagos" className={vta.Botona}>Pagar</Link>
export default function Ventas() {

    return(
        <div className={vta.div}>
            <NavBar/>
            <Card bsPrefix={`${vta.CardS} card`}>
                <SearchBar place="BARCODE HERE"/>
            </Card>
            <Card bsPrefix={`${vta.CardTV} card`}>
                <TablaVentas/>

                <Link to="/Home" className={vta.Botonc}>Cancelar</Link>

            </Card>
            <Modal Prices="999.999"/>

        </div>
    );



}