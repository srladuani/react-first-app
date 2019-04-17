import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Sarwan', age: 29},
      {id: 2, name: 'Kumar', age: 28},
      {id: 3, name: 'ABC', age: 32}
    ],
    showPersons: false
  }
  
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleShowPersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Sarwan Kumar', age: 29},
        {name: event.target.value, age: 28},
        {name: 'ABC', age: 30}
      ]
    })
  };

  render (){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, this is my first react App</h1> 
        <button 
          style = {style}
          onClick = {this.toggleShowPersons}>Toggle Persons</button>
        {
          persons
        }
      </div>
    );
  }
};

export default App;
