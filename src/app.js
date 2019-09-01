console.log("App.js is running!");

// JSX - JavaScript XML
var template = (

    <div>
        <h1>Indecision App</h1>
        <h3>Just testing</h3>
        <p>This is JSX from app.js!</p>
    </div>

);

var app = {
    title: 'Indecision App!',
    subtitle: 'In progress',
    description: 'This is a simple description',
    options: ['one', 'two']
};

function getSubtitle(_subtitle){
    if (_subtitle){
        return <p>{_subtitle}</p>;
    } 
}

var templateTwo = (
    <div>
        <h1>{app.title ? app.title : 'No app'}</h1>
        <h2>{app.title ? app.subtitle : 'No app'}</h2>
        <p>{app.title && app.subtitle ? app.description : 'No app'}</p>
        <p>{app.options.length > 0 ? 'Here are your options: ' + app.options[0] + ' and ' + app.options[1] : 'No options' }</p>
    </div>
);

//Create a templateTwo var JSX expression
//div 
//  h1 -> Vinicius Cosendey
//  p ->  Age: 21
//  p ->  Location: Brazil
// Render templateTwo

var appRoot = document.getElementById('app'); 

ReactDOM.render(templateTwo, appRoot);