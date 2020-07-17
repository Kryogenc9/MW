import React from "react";
import InputLine from "../Components/InputLine";
import Nuevo from "../CSS/NewProduct.module.css"
import NavBar from "../Components/NavBar";

export default class NewProduct extends React.Component {
    state = {
        NewData: {
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
    doSave = (event) => {
        event.preventDefault();


    }


    onChange = (prod, event) => {
        const value = event.target.value;
        const NewData = Object.assign({}, this.state.NewData);
        NewData[prod] = value;
        this.setState({
            NewData
        });
    }

    render() {
        const {Codigo, Producto, Precio} = this.state.NewData;
        const {errors} = this.state;
        return (
            <div className={Nuevo.div}>
                <NavBar/>
                <form className={Nuevo.form}>
                    <label className={Nuevo.titulo}>MW New product Layout</label>
                    <label className={Nuevo.label1}>
                        Ingrese los campos solicitados
                    </label>
                    <InputLine
                        name="codigo"
                        label="codigo"
                        type="number"
                        onChange={this.onChange}
                        error={errors.Code}
                        value={Codigo}
                        className={Nuevo.input1}
                        className1={Nuevo.labelcodigo}

                    />
                    <InputLine
                        name="producto"
                        label="Producto"
                        type="text"
                        onChange={this.onChange}
                        error={errors.Product}
                        value={Producto}
                        className={Nuevo.input2}
                        className1={Nuevo.labelproducto}

                    />
                    <InputLine
                        name="precio"
                        label="Precio"
                        type="number"
                        onChange={this.onChange}
                        error={errors.Code}
                        value={Precio}
                        className={Nuevo.input3}
                        className1={Nuevo.labelprecio}

                    />
                    <button className={Nuevo.aceptar}>Aceptar</button>
                    <button className={Nuevo.cancelar}>Cancelar</button>
                </form>
            </div>
        );
    }


}
