import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import puppies from "./puppies.json"
import Card from "./components/Card"
import './App.css';

class App extends Component {
  
  state = {
    puppies
  };
  
  render() {   
    return ( 
      <Wrapper>
        {this.state.puppies.map(puppy => (
          <Card
            id = {puppy.id}
            key = {puppy.id}
            alt = {puppy.alt}
            image = {puppy.image} 
          />
        ))}
      </Wrapper>
    )  
  }
    
}

export default App;
