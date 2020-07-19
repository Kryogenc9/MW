import React from "react";
import NavBar from "../Components/NavBar";
import InputLine from "../Components/InputLine";
import Nuevo from "../CSS/Change.module.css";
import {updat} from "../api/index"


export default class Change extends React.Component {
    state = {
        Update: {
            Code: '',
            Code2: ''

        },
        errors: {
            Code: false,
            Code2: false
        }
    }


    doChange = (event) =>{
        event.preventDefault();
        console.log(this.state.Update);
        updat(this.state.Update);

    }
    onChange = (prod, event) => {
        const value = event.target.value;
        const Update = Object.assign({}, this.state.Update);
        Update[prod] = value;
        this.setState({
            Update
        });
    }

    render() {
        const {Code, Code2} = this.state.Update;
        const {errors} = this.state;
        return (
            <>
                <NavBar/>
                <div className={Nuevo.div}>

                    <InputLine
                        name="Code2"
                        label="Codigo Anterior"
                        type="number"
                        onChange={this.onChange}
                        error={errors.Code2}
                        value={Code2.Code2}
                        className={Nuevo.input1}
                        className1={Nuevo.labelcodigo}

                    />
                    <InputLine
                        name="Code"
                        label="Codigo Nuevo"
                        type="number"
                        onChange={this.onChange}
                        error={errors.Code}
                        value={Code.Code}
                        className={Nuevo.input2}
                        className1={Nuevo.labelcodigo}

                    />
                    <button className={Nuevo.boton1} onClick={this.doChange}>ACEPTAR</button>
                    <button className={Nuevo.boton2}>CANCELAR</button>
                </div>
            </>
        );
    }

}