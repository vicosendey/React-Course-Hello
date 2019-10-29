 class IndecisionApp extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             options: props.options
         };
         this.hasOptionsFunc = this.hasOptionsFunc.bind(this);
         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
         this.handlePick = this.handlePick.bind(this);
         this.handleAddOption = this.handleAddOption.bind(this);
         this.handleDeleteOption = this.handleDeleteOption.bind(this);
     }
     componentDidMount(){
         console.log('componentDidMount!');
     }
     componentDidUpdate(){
         console.log('componentDidUpdate!');
     }
     hasOptionsFunc(){
        return this.state.options.length > 0 ? true : false;
     }
     handleDeleteOptions(){
         this.setState(() => ({
             options: []
         }));
     }
     handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option)=> optionToRemove !== option  )
        }));
     };
     handleAddOption(option){
         if(!option){
            return 'Enter valid value to add item';
         } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
         } 
        this.setState((prevState) =>({
                options: prevState.options.concat(option)
        }));
     }
     handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
        console.log(randomNum);
     }
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        console.log(this.state.options);
        return (
            <div>
                <Header subtitle= {subtitle}/>
                <Action 
                    hasOptions={this.hasOptionsFunc()} 
                    handlePick={this.handlePick}
                    />
                <Options
                    options = {this.state.options}
                    deleteFunc={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = { 
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    console.log(props.options);
    return (
        <div>
            <button onClick={props.deleteFunc}>Remove All</button>
            Options:
            {
                props.options.map((i, index) => (
                    <Option
                        key={index}
                        optionText={i}
                        handleDeleteOption={props.handleDeleteOption}
                      />
                    ))
            }

            
        </div>
    );
};


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({
                error: error
        }));
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button >Add Option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp options={['1','2','3']}/>, document.getElementById('app'));