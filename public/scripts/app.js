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
    title: 'Indecision App!',
    subtitle: 'In progress',
    description: 'This is a simple description',
    options: ['one', 'two']
};

function getSubtitle(_subtitle) {
    if (_subtitle) {
        return React.createElement(
            'p',
            null,
            _subtitle
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title ? app.title : 'No app'
    ),
    React.createElement(
        'h2',
        null,
        app.title ? app.subtitle : 'No app'
    ),
    React.createElement(
        'p',
        null,
        app.title && app.subtitle ? app.description : 'No app'
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options: ' + app.options[0] + ' and ' + app.options[1] : 'No options'
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
