import React, { Component } from "react";
import "./cardlist.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        return (
        <article className="cardlist">
            {this.props.cats.map(cat => {
            return (
              <Card cat={cat} />
              // <section className="card" key={cat.id}>
              //   <img src={`https://robohash.org/${cat.id}?set=set4&size=180x180`} alt={`Photograph of ${cat.name}.`} />
              //   <h2>{cat.name}</h2>
              //   <p>{cat.address.street}, {cat.address.suite}</p>
              // </section>
            );
          })}
        </article>
        );
    }
}

export default CardList;