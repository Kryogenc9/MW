import React, {Component} from "react";
import {Line} from 'react-chartjs-2'
import dv from "../CSS/GraficoLineas.module.css"

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["ene", "mar", "abr", "may", "jun", "jul"],
                datasets: [
                    {
                        label: "Ventas 2019 ",

                        borderColor: "#7B68EE",
                        data: [4, 5, 10, 10, 15, 12]
                    },
                    {
                        label: "Ventas 2018",
                        borderColor: "#00ffff",
                        data: [6, 3, 8, 6, 25, 16]
                    }
                ]
            }
        }
    }

    getChartData = canvas => {
        const data = this.state.data;
        return data;
    }


    render() {
        return (
            <div className={dv.div}>
                <h3 className={dv.h3x}>Ventas</h3>
                <Line options={{responsive: true}} data={this.state.data} style={{Color: "#4169E1"}}/>

            </div>
        );
    }
}