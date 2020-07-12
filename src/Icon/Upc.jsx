import React from "react";

export default function Upc(props) {
    const {size,altura,fill,name}=props /*{size}, {fill}, className={`${name} `}*/
    return(
        <svg width={size} height={altura} height={size} viewBox="0 0 16 16" className={`${name} bi bi-upc`}  fill={fill}
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
        </svg>
    );

}