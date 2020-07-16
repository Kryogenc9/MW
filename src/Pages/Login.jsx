import React from "react";
import log from "../CSS/Login.module.css"
import {Link} from "react-router-dom";


import InputLine from "../Components/InputLine"



export default class LoginForm extends React.Component {
    state = {
        loginData: {
            email: '',
            password: ''
        },
        errors: {
            email: false,
            password: false
        }
    };
    olvido = () =>{
        alert("HOLA HAS OLVIDADO LA CONTRASELA LLAMA A 581293918");
    }



    onChange = (name, event) => {
        const value = event.target.value;
        const loginData = Object.assign({}, this.state.loginData);
        loginData[name] = value;
        this.setState({
            loginData
        });
    }

    render() {
        const { email, password } = this.state.loginData;
        const { errors } = this.state;

        return (
            <form className={log.form}>
                <label className={log.logo}>MW Logistic</label>
                <InputLine
                    name="email"
                    label="Correo"
                    type="text"
                    onChange={this.onChange}
                    error={errors.email}
                    value={email}
                    className={log.input1}
                    className1={log.labelemail}
                />
                <InputLine
                    name="password"
                    label="Contrase&ntilde;a"
                    type="password"
                    onChange={this.onChange}
                    error={errors.password}
                    value={password}
                    className={log.input2}
                    className1={log.labelpassword}
                />
                <label onClick={this.olvido} className={log.Olvido}>Olvido su Contraseña</label>
                <button className={log.boton}><Link to={"/Home"}>Ingresar</Link></button>
            </form>
        );
    }
}

