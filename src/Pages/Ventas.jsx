import React from "react";
import NavBar from "../Components/NavBar";
import vta from "../CSS/VentasCss.module.css"
import SearchBar from "../Components/SearchBar";
import Card from "react-bootstrap/Card";
import TablaVentas from "../Components/TablaVentas";
import Boton from "../Components/Button";

//<Search size="1em" fill="#9AA0A8" name={vta.SearchIcon}/>

export default function Ventas() {
    return(
        <div className={vta.div}>
            <NavBar/>
            <Card bsPrefix={`${vta.CardS} card`}>
                <SearchBar place="BARCODE HERE"/>
            </Card>
            <Card bsPrefix={`${vta.CardTV} card`}>
                <TablaVentas/>
                <Boton name="Aceptar" bsPrefix={`${vta.Botona} btn`}/>
                <Boton name="Cancelar" bsPrefix={`${vta.Botonc} btn`}/>
            </Card>
        </div>
    );



}