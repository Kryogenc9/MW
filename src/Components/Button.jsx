import React from "react";
import {Link} from "react-router-dom";


export default function Boton(props) {
    const {name, style,link} = props

    return(
        <Link to={link}>{name}</Link>
        //<Button variant="primary" bsPrefix={`${style} btn` } /*href={link}*/><Link to={link}/>{name}</Button>
    );

}