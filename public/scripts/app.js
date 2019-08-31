'use strict';

console.log("App.js is running!");

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'h3',
        null,
        'Just testing'
    ),
    React.createElement(
        'p',
        null,
        'This is JSX from app.js!'
    )
);

var app = {
    title: 'Indecision App',
    subtitle: 'In progress'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h2',
        null,
        app.subtitle
    )
);

//Create a templateTwo var JSX expression
//div 
//  h1 -> Vinicius Cosendey
//  p ->  Age: 21
//  p ->  Location: Brazil
// Render templateTwo

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
