import React from "react";
import loc from "./../img/location.png"

export default function Card(props){
    return(
        <div className="card">
            <div className="card--imgContainer"><img src={props.imageUrl} className="card--img"></img></div>
            <div className="card--contents">
                <div className="card--location">
                    <img src={loc} className="card--location--logo"></img>
                    <p>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                
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