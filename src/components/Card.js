import React from "react";
import loc from "./../img/location.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl}></img>
            <div className="card--contents">
                <img src={loc}></img>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">
                    <span className="startDate">{props.startDate}</span>
                    <span> - </span>
                    <span className="endDate">{props.endDate}</span>
                </p>
                <p className="card--text">{props.description}</p>
            </div>
        </div>
    );
};