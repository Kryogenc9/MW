import React from "react";
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
import TrashFill from "../Icon/TrashFill";
import css from "../CSS/TablaVentasCss.module.css"
import Cantidad from "./Cantidad";





export default class TablaVentas extends React.Component {

    state = {
        nuevo: {
            Code: '',
            Product: '',
            Price: '',

        },
        errors: {
            Code: false,
            Product: false,
            Price: false
        }
    }

    tabla() {



    }




    render() {


        return (
            <>
                <Table striped bordered hover bsPrefix={`${css.Table} table`} id="tabla1">

                    <thead>
                    <tr>
                        <th className={css.th}>#</th>
                        <th className={css.th}>Producto</th>
                        <th className={css.th}>Precio</th>
                        <th className={css.th}>Borrar</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                    </tr>
                    <tr>

                    </tr>
                    <tr>

                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>

                    </tr>
                    </tfoot>

                </Table>
                <button onClick={this.tabla}> Calcular</button>
            </>
        );

    }
}