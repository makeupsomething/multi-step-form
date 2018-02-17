import React, { Component } from 'react';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mealTypes: ['breakfast', 'lunch', 'dinner'],
        };
    }

    render() {
      const { handleChange, numberOfGuests, pageUp, pageDown, meal } = this.props;
      return (
        <div className="App">
          <select required onChange={handleChange} name="meal">
            <option disabled selected value> -- select an option -- </option>
            {this.state.mealTypes.map(meal => <option key={meal} value={meal}>{meal}</option>)};
          </select>
          <br />
          {this.state.numberOfGuests}
          <input required name="numberOfGuests" id="number" type="number" value={numberOfGuests} onChange={handleChange} min="1" max="10" />
          <button disabled={meal === ''} onClick={pageUp}>Next</button>
        </div>
      );
    }
  }
  
  export default Step1;