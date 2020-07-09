import React from "react";

export default class Cantidad extends React.Component{

    componentDidMount() {
        const a = document.getElementById(this.props.id);

        for (var i=1;i<=99;i++){
            a.innerHTML+="<option>"+i+"</option>"
        }
    }

    render() {

        return(

            <select name="Cantidad" id={this.props.id}>

            </select>
        );


    }

}
