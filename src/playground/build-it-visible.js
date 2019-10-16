class VisibleApp extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            toggle: true
        }
    }
    toggleVisibility(){
        this.setState ((previousState) => {
            return {
                toggle: !previousState.toggle
            };
        });
        console.log(this.state.toggle);
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.toggle ? 'Hide details' : 'Show details'}</button>
                {
                    this.state.toggle && (
                        <h1>Now you see me</h1>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibleApp />, document.getElementById('app'));