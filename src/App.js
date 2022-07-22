import React, { Component } from 'react';
import CardList from "./components/cardlist/cardlist.component.jsx"
import SearchBar from './components/searchbar/searchbar.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState(() => {return { cats: data }}, () => console.log(this.state)))
  }

  onSearch = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    }, () => console.log(this.state));
    };

    render() {
      const filteredCats = this.state.cats.filter(cat => cat.name.toLocaleLowerCase().includes(this.state.searchField));

      return (
        <div className="App">
          <h1>Adopt-a-Cat</h1>
          <SearchBar onChangeHandler={this.onSearch} />
          <CardList cats={filteredCats} />
        </div>
      )
    }
}

export default App;