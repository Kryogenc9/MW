import React from "react";
import mod from "../CSS/Modal.module.css"
import vta from "../CSS/VentasCss.module.css"
export default function Modal(props) {
    const {Prices} = props;


    return (

        <>
            {/*<!-- Button trigger modal -->*/}
            <button type="button" className={`${vta.Botona} btn btn-primary`} data-toggle="modal" data-target="#exampleModal">
                Pagos
            </button>

            {/*<!-- Modal -->*/}
            <div className="modal fade" id="exampleModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className={`${mod.Content} modal-content`}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Pagos</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className={`${mod.ModalBody} modal-body`}>

                            <label className={mod.label}>TOTAL A PAGAR:</label> <label className={mod.label} id="tap">${Prices}</label>
                            <input className={mod.input} type="number" placeholder={Prices}/>

                            <form>
                                <input type="radio" id="efectivo" name="metodo" value="efectivo"/> <label for="efectivo"> Efectivo</label>
                                <input type="radio" id="tarjeta" name="metodo" value="tarjeta"/> <label For="tarjeta">Tarjeta</label>
                            </form>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}