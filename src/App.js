import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import puppies from "./puppies.json"
import Card from "./components/Card"
import './App.css';

class App extends Component {
  
  state = {
    puppies
  };

  clickGuess = id => {

      const puppies = this.state.puppies.map
      this.setState({ puppies });
  }
  
  render() {   
    return ( 
      <Wrapper>
        {this.state.puppies.map(puppy => (
          <Card
            id = {puppy.id}
            key = {puppy.id}
            alt = {puppy.alt}
            image = {puppy.image}
            clicked = {puppy.clicked} 
          />
        ))}
      </Wrapper>
    )  
  }
    
}

export default App;
