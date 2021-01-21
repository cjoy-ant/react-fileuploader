import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import FilterableList from './FilterableList/FilterableList';

class App extends Component {
//  updateSearchTerm(term) {
//    this.setState({
//      searchTerm: term
//    })
//  }
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSearchTerm(term){
    this.setState({
      searchTerm: term
    });
  }

  updateFilterOption(option){
    this.setState({
      filterOption: option
    });
  }

  render () {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}
          />
        <FilterableList
          files={this.state.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          />
      </div>
    );
  }
}

export default App;