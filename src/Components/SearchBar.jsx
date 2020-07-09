import React from "react";
import vta from "../CSS/VentasCss.module.css";
import Button from "react-bootstrap/Button";
import Search from "../Icon/Search";
import Card from "react-bootstrap/Card";

export default function SearchBar(props) {
    const{place} = props;
    return(
        <Card bsPrefix={`${vta.SearchBarCard} card`}>

            <input type={"text"} placeholder={place}/>
            <Button><Search size="1em" fill="#9AA0A8" name={vta.SearchIcon}/></Button>


        </Card>


    );

}