import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";


export default function App() {
    const cards = data.map( card => (
        <Card
            key={card.title}
            {...card}
        />
    ));

    return(
        <div className="main">
            <Header />
            <div className="allCards">{cards}</div> 
        </div>
    );
};