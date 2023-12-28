// En tu componente React (por ejemplo, App.js)
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
  }, []);

  return (
    <div>
      <div id="text"></div>
      {/* Otra parte de tu aplicación */}
    </div>
  );
}

export default App;
