import React from "react";
import NavBar from "../Components/NavBar";
import av from "../CSS/Generalcss.module.css"
import Card from 'react-bootstrap/Card'
import Chart from "../Components/GraficoLinea";
import GraficoBarras from "../Components/GraficoBarras";



export default function General() {
    return(
        <div className={av.Gral}>
            <NavBar></NavBar>
            <Card bsPrefix={`${av.GraficoLineas} card`}>
                <Chart/>

            </Card>
            <Card bsPrefix={`${av.GraficoBarras} card`}>
                <GraficoBarras/>
            </Card>
        </div>

    );

}