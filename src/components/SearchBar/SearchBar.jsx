import React from "react";
import "./SearchBar.css";

const sortByOtions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOtions).map((i) => {
      let sortByOtionsValue = sortByOtions[i];
      return <li key={sortByOtionsValue}>{sortByOtionsValue}</li>;
    });
  }
  render() {
    return (
        <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{ this.renderSortByOptions }</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a href="...">Let's Go</a>
      </div>
    </div>
    )
    
  }
}
export default SearchBar;
