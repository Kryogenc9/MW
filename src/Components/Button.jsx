import React from "react";
import Button from "react-bootstrap/Button";

export default function Boton(props) {
    const {name} = props

    return(
        <Button variant="primary">{name}</Button>
    );

}