// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }

};

const clearOptions = () =>{
   app.options = [];
   renderApp();
};

const onMakeDecision = () =>{
    if(app.options.length > 0){
        const randomNum = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNum];
        alert(option);
        console.log(randomNum);
    } else{
        alert('Add some itens first!');
    }
    
};

const appRoot = document.getElementById('app'); 
let toggleCliked = false;

const toggleList = () =>{
    toggleCliked = !toggleCliked;
    renderApp();
}

const renderApp = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearOptions}>Remove All</button>
            <button onClick={toggleList}>{toggleCliked ? 'Show List' : 'Hide List'}</button>
            {
                !toggleCliked && 
                ( 
                <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
                </ol>
                )
            }
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();