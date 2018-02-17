import React, { Component } from 'react';

class Step4 extends Component { 
    render() {
        const { mealType, numberOfGuests, restaurant, selectedDishes } = this.props;
      return (
        <div className="App">
            <p>{mealType}</p>
            <p>{numberOfGuests}</p>
            <p>{restaurant}</p>
            <ul>
                {selectedDishes.map(dish => <li key={dish.dishId}>{dish.dishId}</li>)}
            </ul>
            <button>Submit</button>
        </div>
      );
    }
  }
  
  export default Step4;