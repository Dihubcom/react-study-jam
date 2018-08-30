class MyComponent extends React.Component{
	constructor(props){
		super(props);

		// we declare the initial state here ...
		this.state = {
			name: 'ReactJS'
		}
	}

	render(){
		// here we use the value of the state by calling
		// this.state
		return <h1>Hello {this.state.name}</h1>
	}
}

let container = document.getElementById("container");
ReactDOM.render(<MyComponent />, container);