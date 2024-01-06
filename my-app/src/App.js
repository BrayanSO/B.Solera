import React from 'react';
import TextAnimation from './components/TextAnimation';
import ConsoleAnimation from "./components/ConsoleAnimation"
import "./Style/TextAnimation.css";
import "./Style/buttons.css";
import "./Style/ConsoleAnimation.css";

const Header = () => {
  return (
    <div>
      <div className='App'>
      <TextAnimation></TextAnimation>
      <ConsoleAnimation></ConsoleAnimation>
      </div>
      <div>
        <button className="ON">ON</button>
        <button className="OFF">OFF</button>
      </div>
    </div>
    
  );
}

export default Header;