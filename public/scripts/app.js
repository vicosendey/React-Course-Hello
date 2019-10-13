'use strict';

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var clearOptions = function clearOptions() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    if (app.options.length > 0) {
        var randomNum = Math.floor(Math.random() * app.options.length);
        var option = app.options[randomNum];
        alert(option);
        console.log(randomNum);
    } else {
        alert('Add some itens first!');
    }
};

var appRoot = document.getElementById('app');
var toggleCliked = false;

var toggleList = function toggleList() {
    toggleCliked = !toggleCliked;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: clearOptions },
            'Remove All'
        ),
        React.createElement(
            'button',
            { onClick: toggleList },
            toggleCliked ? 'Show List' : 'Hide List'
        ),
        !toggleCliked && React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
