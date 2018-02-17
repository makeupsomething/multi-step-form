import React, { Component } from 'react';

class Step2 extends Component {
    render() {
        const { restaurant, dishes, mealType, handleChange, pageUp, pageDown } = this.props;
        let restaurants = dishes.dishes.filter(dish => dish.availableMeals.includes(mealType) === true)
      return (
        <div className="App">
          <select onChange={handleChange} name="resturant">
            <option disabled selected value> -- select an option -- </option>
            {restaurants.map(dish => <option key={dish.id} value={dish.restaurant}>{dish.restaurant}</option>)};
          </select>
          <button onClick={pageDown}>Prev</button>
          <button disabled={restaurant === ''} onClick={pageUp}>Next</button>
        </div>
      );
    }
  }
  
  export default Step2;