class Counter extends React.Component{
    constructor(props){
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: []
        };
    }
    componentDidMount(){
        try{
           const json = localStorage.getItem('count');
           const count = JSON.parse(json);
           console.log(count);
            this.setState(() => ({
                count: !isNaN(parseInt(count)) ? parseInt(count) : 0
            }))
        }catch(e){
           //Do nothing if it is invalid
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
            console.log('componentDidUpdate!');
        }
     }
    plusOne(){
        this.setState((prevState) =>{
            return{
                count: prevState.count + 1
            };
        });
    }
    minusOne(){
        this.setState((prevState) =>{
            return{
                count: prevState.count - 1
            };
        });
    }
    reset(){
        this.setState((prevState) =>{
            return{
                count: 0
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));