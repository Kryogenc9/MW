import React from "react";
import InputLine from "../Components/InputLine";
import Nuevo from "../CSS/NewProduct.module.css"
import NavBar from "../Components/NavBar";
import {save} from "../api/index"

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

        save(this.state.NewData);
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
        const {Code, Product, Price} = this.state.NewData;
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
                        name="Code"
                        label="codigo"
                        type="number"
                        onChange={this.onChange}
                        error={errors.Code}
                        value={Code.Code}
                        className={Nuevo.input1}
                        className1={Nuevo.labelcodigo}

                    />
                    <InputLine
                        name="Product"
                        label="Producto"
                        type="text"
                        onChange={this.onChange}
                        error={errors.Product}
                        value={Product.Product}
                        className={Nuevo.input2}
                        className1={Nuevo.labelproducto}

                    />
                    <InputLine
                        name="Price"
                        label="Precio"
                        type="number"
                        onChange={this.onChange}
                        error={errors.Price}
                        value={Price.Price}
                        className={Nuevo.input3}
                        className1={Nuevo.labelprecio}

                    />
                    <button className={Nuevo.aceptar} onClick={this.doSave}>Aceptar</button>
                    <button className={Nuevo.cancelar}>Cancelar</button>
                </form>
            </div>
        );
    }


}
