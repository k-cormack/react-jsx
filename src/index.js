// Import the Recact and ReactDOM libraries
import React from 'react'; // note the naming convention
import ReactDOM from 'react-dom';

// Create React component
const App = function () { //or use the ES2015 syntax of '() =>'

function getButtonText() {
  return 'Click Here Now!!';
}

const buttonText = 'click me!';
const labelText = { text: 'object prop'}

  return (
    <div>
      <label className="label" htmlFor="name"> {/* use 'className' to avoid the confusion/collision with ES2015 use of 'class' in a declaration, and 'htmlFor' b/c of 'for' loops */}
        Enter Name:
        {labelText.text}
      </label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
      {buttonText}
      {getButtonText()}

      </button>
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);