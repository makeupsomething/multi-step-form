import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dishes from './dishes.json';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: '',
      numberOfGuests: 1,
      resturant: '',
      selectedDishes: [{dishId: '', servings: 1}],
      steps: ['step 1', 'step 2', 'step 3', 'review'],
      currentPage: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectMeal = this.selectMeal.bind(this);
    this.addMeal = this.addMeal.bind(this);
    this.pageUp = this.pageUp.bind(this);
    this.pageDown = this.pageDown.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addMeal() {
    this.setState({
        selectedDishes: [...this.state.selectedDishes, {dishId: '', servings: 1}]
    })
  }

  pageUp() {
    this.setState({
      currentPage: this.state.currentPage+1
    })
  }

  pageDown() {
    this.setState({
      currentPage: this.state.currentPage-1
    })
  }

  selectMeal(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      const id = target.id;
      const selectedDishes = this.state.selectedDishes;

      if(name === 'numberOfServings') {
          selectedDishes[id].servings = parseInt(value, 10);
      } else {
          selectedDishes[id].dishId = value;
      }

      this.setState({
          selectedDishes
      });
  }

  render() {

    let step = null;
    if(this.state.currentPage === 1) {
      step = <Step1 handleChange={this.handleChange} numberOfGuests={this.state.numberOfGuests} pageUp={this.pageUp} pageDown={this.pageDown} meal={this.state.meal}/>;
    } else if (this.state.currentPage === 2) {
      step = <Step2 handleChange={this.handleChange} dishes={dishes} mealType={this.state.meal} pageUp={this.pageUp} pageDown={this.pageDown} restaurant={this.state.resturant} />
    }  else if (this.state.currentPage === 3) {
      step = <Step3 addMeal={this.addMeal} selectMeal={this.selectMeal} selectedDishes={this.state.selectedDishes} dishes={dishes} restaurant={this.state.resturant} mealType={this.state.meal} pageUp={this.pageUp} pageDown={this.pageDown} numberOfGuests={this.state.numberOfGuests} />
    } else {
      step = <Step4 mealType={this.state.meal} numberOfGuests={this.state.numberOfGuests} restaurant={this.state.resturant} selectedDishes={this.state.selectedDishes} />
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {step}
      </div>
    );
  }
}

export default App;
