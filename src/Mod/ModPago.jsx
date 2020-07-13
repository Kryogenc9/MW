import React,{useState} from "react";

import vta from "../CSS/VentasCss.module.css"
import {Modal, Button} from "react-bootstrap"

//import 'bootstrap/dist/js/bootstrap.bundle.min';
import mod from "../CSS/Modal.css"

/*export default class ModPago extends React.Component{
    constructor(props) {
        super(props);
        this.state
    }

}*/


export default function ModPago() {
    const [show, setShow] = useState(false)
    const [pay, payLoad]= useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const pagoEfectivo= () => payLoad(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} bsPrefix={`${vta.Botona} btn`}>
                Pagar
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header closeButton /*bsPrefix={`${mod.Header}modal-tittle`}*/>
                    <Modal.Title>Pagos MW</Modal.Title>
                </Modal.Header>
                <Modal.Body bsPrefix={`${mod.Body} modal-body`}>
                    <form className={mod.form}>
                        <label>Monto a Pagar:</label> <label>$999.999</label>
                        <input type="number" name="Pago" placeholder={"999.999"}/>
                        <div>
                            <input type="radio" id="efectivo" name="pago" value="Efectivo" />
                            <label for="efectivo">Efectivo</label>
                            <input type="radio" id="tarjeta" name="pago" value="Tarjeta"/>
                            <label For="tarjeta">Tarjeta</label>
                        </div>

                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>Pagar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}