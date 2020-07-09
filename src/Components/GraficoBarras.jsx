import React, {Component} from "react";
import {Bar, Line} from 'react-chartjs-2'
import dv from "../CSS/GraficoBarras.module.css"

export default class GraficoBarras extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{
                labels:["","ene","mar","abr","may","jun","jul"],
                datasets:[
                    {
                        label: "Ventas 2020",
                        backgroundColor: "#7B68EE",
                        data:[0,4,5,10,10,15]
                    }
                ]
            }
        }
    }
    render() {
        return(
            <div className={dv.div}>

                <h3 className={dv.h3x}>Ventas Año 2020</h3>
                <Bar options={{responsive:true}} data={this.state.data} style={{Color:"#4169E1"}}/>
            </div>

        );
    }
}