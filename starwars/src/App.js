import React from 'react';
import './App.css';
 import Parent from './components/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const HeaderFont = styled.img`
margin: 1rem 0;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
  <HeaderFont className='Font' src="https://fontmeme.com/permalink/200221/9011541cda3c80fe53fc2403b9a5a36c.png" alt="star-wars-font" border="0"/>
    <Parent/> 
    </div>
    
      
    
  );
}

export default App;
