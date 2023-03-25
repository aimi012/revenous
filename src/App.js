import React from 'react';
// import ReactDOM from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const busisness = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way', 
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const busisnesses = [busisness,busisness,busisness,busisness,busisness,busisness]

function App() {
  return (
    <div class="App">
  <h1>ravenous</h1>
  <SearchBar/>
  <BusinessList busisness={busisnesses}/>
</div>
  );
}

export default App;
