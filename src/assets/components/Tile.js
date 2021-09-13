import React from "react";

function Tile({image, paragraph, title}) {
    return (
        <section className="section">
            <img src={image} alt="brand"/>
            <p className="section.p"> {paragraph}</p>
            <h2 className="h2">{title}</h2>
        </section>
    );
}

export default Tile;
