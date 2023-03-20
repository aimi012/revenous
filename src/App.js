import React from 'react';
// import ReactDOM from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SeacrhBar/SeacrhBar';

function App() {
  return (
    <div class="App">
  <h1>ravenous</h1>
  <SearchBar/>
  <BusinessList/>
</div>
  );
}

export default App;
