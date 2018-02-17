import React, { Component } from 'react';

class Step3 extends Component {
    render() {
        const { addMeal, selectMeal, selectedDishes, dishes, restaurant, mealType, pageUp, pageDown, numberOfGuests } = this.props;
        let meals = dishes.dishes.filter(dish => dish.availableMeals.includes(mealType) === true && dish.restaurant === restaurant);
        let totalMeals = selectedDishes.reduce((prev,next) => prev + next.servings,0);
        return (
        <div className="App">
            {selectedDishes.map((id, index) =>
            <div key={index}>
                <select onChange={selectMeal} id={index} name="dish">
                    <option disabled selected value> -- select an option -- </option>
                    {meals.map(dish => <option disabled={selectedDishes.find(o => o.dishId === dish.name)} key={dish.id} value={dish.name}>{dish.name}</option>)};
                </select>
                <input name="numberOfServings" id={index} type="number" value={selectedDishes[index].servings} onChange={selectMeal} min="1" max="10" />
                <br />
            </div>
            )}
            {totalMeals < numberOfGuests && <p>You should have a meal for each guest {totalMeals}/{numberOfGuests}</p>}
            <p>You cannot select more than 10 meals, current: {totalMeals}</p>
            <button onClick={addMeal}>add meal</button>
            <button onClick={pageDown}>Prev</button>
            <button disabled={selectedDishes[0].dishId === '' || totalMeals > 10 || totalMeals < numberOfGuests } onClick={pageUp}>Next</button>
        </div>
      );
    }
  }
  
  export default Step3;