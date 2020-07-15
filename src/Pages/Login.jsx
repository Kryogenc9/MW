import React from "react";
import log from "../CSS/Login.module.css"
import {Link} from "react-router-dom";

export default function Login() {
    return(

            <form className={log.form}>

                <label className={log.logo}>MW Logistic</label>
                <div className={log.div}><label For="mail" className={log.labelemail}>Email: </label><input className={log.input1} type="email" id="mail"/></div>
                <div className={log.div}><label For="psw" className={log.labelpassword}>Password: </label><input className={log.input2} type="password" id="psw"/></div>

                <label className={log.Olvido}>Olvido Contraseña</label>

                <button className={log.boton} type="button" ><Link to={"/Home"}>Aceptar</Link></button>
            </form>

    );


}