import React from "react";
import vta from "../CSS/VentasCss.module.css";
import Button from "react-bootstrap/Button";
import Search from "../Icon/Search";
import Card from "react-bootstrap/Card";

export default function SearchBar(props) {
    const{place} = props;
    return(
        <div className={vta.SearchBarCard}>
            <input type={"text"} placeholder={place}/>
            <Button bsPrefix={`${vta.SearchButton} btn`}><Search size="1em" altura="1em" fill="#9AA0A8" name={vta.SearchIcon}/></Button>
        </div>



    );

}