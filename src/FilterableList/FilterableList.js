import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
      .filter(file => file.name.includes(searchTerm)
        && (filterOption === 'All' || file.status === filterOption)
        )
      .map((file, key) => <ListItem {...file} key={key} />);
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  files: []
};

export default FilterableList;

// React needs the key argument ('key' is a keyword in JavaScript ES6)
// so it knows what index it is mapping through to display to the DOM
// take a list, for every index, map through each index, and display on the DOM
// within that particular component
// i.e., array has 5 items, map tells current component to display that component 5 times
// React doesn't know that each component is different

// Spread operator ('...' is a ES6 functionality) -- takes the array, 
// pulls information out of it
// creates a prompt, then passes it down to List component