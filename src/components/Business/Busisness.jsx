import React from 'react';
import './Busisness.css'


class Busisness extends React.Component {
    render() {
        return (
            <div className="Business">
  <div class="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>MarginOtto Pizzeria</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>1010 Paddington Way</p>
      <p>Bordertown</p>
      <p>NY 10101</p>
    </div>
    <div className="Business-reviews">
      <h3>ITALIAN</h3>
      <h3 className="rating">4.5 stars</h3>
      <p>90 reviews</p>
    </div>
  </div>
</div>
        )
    }
}

export default Busisness;