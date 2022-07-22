import React, { Component } from "react";
import "./searchbar.styles.css"

class SearchBar extends Component {
    render() {
        return (
                <input className="searchbar" type="search" placeholder="Search for a cat" autoFocus onChange={this.props.onChangeHandler}/>
        );
    }
}

export default SearchBar;