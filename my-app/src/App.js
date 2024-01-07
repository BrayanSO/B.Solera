import React from 'react';
import TextAnimation from './components/TextAnimation';
import ConsoleAnimation from "./components/ConsoleAnimation"
import { Toggle } from './components/Toggle.js';

const Header = () => {
  const logState = (state) => {
    console.log(state);
  };
  return (
    <div>
      <div className='App'>
      <TextAnimation></TextAnimation>
      <ConsoleAnimation></ConsoleAnimation>
      </div>
      <Toggle
            label="Toggle me"
            toggled={true}
            onClick={logState}
        />
      </div>
    
  );
}

export default Header;