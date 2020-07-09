import React from "react";
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
import TrashFill from "../Icon/TrashFill";
import css from "../CSS/TablaVentasCss.module.css"
import Cantidad from "./Cantidad";

export default function () {

    return(

            <Table striped bordered hover bsPrefix={`${css.Table} table`}>

                    <thead>
                        <tr>
                            <th className={css.th}>#</th>
                            <th className={css.th}>Producto</th>
                            <th className={css.th}>Precio</th>
                            <th className={css.th}>Cantidad</th>
                            <th className={css.th}>Borrar</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={css.td}>1</td>
                            <td className={css.td}>Kryspo Snack 140g</td>
                            <td className={css.td}>$1.990</td>
                            <td className={css.td}><Cantidad id="test"/></td>
                            <td className={css.td}><Button><TrashFill/></Button></td>
                        </tr>
                        <tr>
                            <td className={css.td}>2</td>
                            <td className={css.td}>Kryspo Snack 140g</td>
                            <td className={css.td}>$1.990</td>
                            <td className={css.td}><Cantidad id="test1"/></td>
                            <td className={css.td}><Button><TrashFill/></Button></td>
                        </tr>
                        <tr>
                            <td className={css.td}>3</td>
                            <td className={css.td}>Kryspo Snack 140g</td>
                            <td className={css.td}>$1.990</td>
                            <td className={css.td}><Cantidad id="test2"/></td>
                            <td className={css.td}><Button><TrashFill/></Button></td>
                        </tr>
                    </tbody>
                </Table>

    );

}