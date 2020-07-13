import React from "react";
import {Nav} from "react-bootstrap";
import HouseFill from "../Icon/HouseFill";
import Cash from "../Icon/Cash";
import GearFill from "../Icon/GearFill";
import StarFill from "../Icon/StarFill";
import Upc from "../Icon/Upc";
import WalletFill from "../Icon/WalletFill";
import navb from "../CSS/Nav.module.css"
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div className={navb.div}>
            <Nav /*defaultActiveKey="/Home"*/ className="flex-column" /*variant="tabs"*/>

                    <label className={navb.Logo}>MERCWEB</label>

                <Nav.Item bsPrefix={`${navb.NavItem} nav-item`}>
                    <Nav.Link href="/Home" bsPrefix={`${navb.NavLink} nav-link`}> <HouseFill size="3em" altura="3em"
                                                                                             fill="#9AA0A8"
                                                                                             name={navb.icon}/> <label
                        className={navb.Labels}>Home</label></Nav.Link>
                </Nav.Item>

                <Nav.Item bsPrefix={`${navb.NavItem} nav-item`}>
                    <Nav.Link href="/Ventas" bsPrefix={`${navb.NavLink} nav-link`}> <WalletFill size="3em" altura="3em"
                                                                                                fill="#9AA0A8"
                                                                                                name={navb.icon}/>
                        <label className={navb.Labels}>Venta</label></Nav.Link>
                </Nav.Item>
                <Nav.Item bsPrefix={`${navb.NavItem} nav-item`}>
                    <Nav.Link href="/Ventas" bsPrefix={`${navb.NavLink} nav-link`}> <Cash size="3em" altura="3em"
                                                                                          fill="#9AA0A8"
                                                                                          name={navb.icon}/> <label
                        className={navb.Labels}>Ofertas</label></Nav.Link>
                </Nav.Item>
                <Nav.Item bsPrefix={`${navb.NavItem} nav-item`}>
                    <Nav.Link href="/Ventas" bsPrefix={`${navb.NavLink} nav-link`}> <StarFill size="3em" altura="3em"
                                                                                              fill="#9AA0A8"
                                                                                              name={navb.icon}/> <label
                        className={navb.Labels}>Nuevo Producto</label> </Nav.Link>
                </Nav.Item>
                <Nav.Item bsPrefix={`${navb.NavItem} nav-item`}>
                    <Nav.Link href="/Ventas" bsPrefix={`${navb.NavLink} nav-link`}>
                        <Upc size="3em" altura="3em" fill="#9AA0A8"
                                                                                         name={navb.icon}/> <label
                        className={navb.Labels}>Cambiar Codigo</label></Nav.Link>
                </Nav.Item>
                <Nav.Item bsPrefix={`${navb.NavItem} nav-item`}>
                    <Nav.Link href="/Ventas" bsPrefix={`${navb.NavLink} nav-link`}> <GearFill size="3em" altura="3em"
                                                                                              fill="#9AA0A8"
                                                                                              name={navb.icon}/> <label
                        className={navb.Labels}>Configuracion</label></Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    );


}