// Import the Recact and ReactDOM libraries
import React from 'react'; // note the naming convention
import ReactDOM from 'react-dom';

// Create React component
const App = function () { //or use the ES2015 syntax of '() =>'
  return <div>Hi there!!!</div>
};

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);