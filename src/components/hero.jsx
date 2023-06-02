import React from "react";
import gridImage from "../Images/grid-image.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={gridImage} alt="" className="hero-photo"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p hero--text>Join unique interactive activities led by one-of-a-kind hosts-all without leaving</p>
        </section>
    )
}