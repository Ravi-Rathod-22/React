import React from "react";
import ReactDOM from 'react-dom';

const heading = React.createElement('h1', {id:'intro'}, "Hello, My Name Is Ravi Rathod");

const heading2 = React.createElement('h1', {id:'description'}, "I am here to learn React");

const container = React.createElement("div", {id:'container'}, [heading , heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container)