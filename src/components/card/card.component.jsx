import React, { Component } from "react";
import "./card.styles.css";

class Card extends Component {
    render() {
        const cat = this.props.cat;
        return (
            <section className="card" key={cat.id}>
                <img src={`https://robohash.org/${cat.id}?set=set4&size=180x180`} alt={`Photograph of ${cat.name}.`} />
                <h2>{cat.name}</h2>
                <p>{cat.address.street}, {cat.address.suite}</p>
              </section>
        );
    }
}

export default Card;