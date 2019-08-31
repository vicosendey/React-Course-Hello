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
    title: 'Indecision App',
    subtitle: 'In progress'
};

var templateTwo = (

    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
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