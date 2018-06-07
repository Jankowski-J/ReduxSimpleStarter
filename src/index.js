import React from "react";
import ReactDOM from "react-dom";

// Create a new component. This component should 
// produce some HTML
const App = () => { return <div>Hi!</div>; };

// Take this component's generated HTML and put it 
// on the page (in the DOM)
const container = document.querySelector(".container");
ReactDOM.render(<App/>, container);