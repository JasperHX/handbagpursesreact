import React from "react";

function Tile({image, title, children}) {
    return (
        <section className="section">
            {image && <img src={image} alt="brand"/>}
            <h2 className="h2">{title}</h2>
            {/*<p className="section.p"> {paragraph}</p>*/}
            <p className="section.p">{children}</p>
        </section>
    );
}

export default Tile;

// children ipv paragrah erin zetten op dezelfde manier
// waarde gemaakt met paragraph value en deze kan je maar 1 keer aanroepen
// props werk je mee wanneer je maar 1 waarde hebt en deze vast staat
// children valt altijd binnen een component en is een gesloten element