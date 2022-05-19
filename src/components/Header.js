import React from "react";
import headerImg from "./../img/logo.png"

export default function Header(){
    return(
        <div className="header">
            <img src={headerImg}></img>
            <p>my travel journal.</p>
        </div>
    );
};