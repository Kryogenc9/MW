import React from "react";
import Button from "react-bootstrap/Button";

export default function Boton(props) {
    const {name, style,link} = props

    return(
        <Button variant="primary" bsPrefix={`${style} btn` } /*href={link}*/>{name}</Button>
    );

}