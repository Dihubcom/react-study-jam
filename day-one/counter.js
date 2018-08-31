class Counter extends React.Component {
	constructor(){
		super();

		//here we initialize the state
		this.state = {
			counter: 0
		}
	}

	//the method that increment the counter state by 1
	incrementCounter = () => {
		this.setState(prevState => ({ counter: prevState.counter+1 }));
	}

	//the method that decrement the counter state by 1
	decrementCounter = () => {
		this.setState(prevState => ({ counter: prevState.counter-1 }));
	}
	//render method which renders what we see
	render(){
		const counterStyle = {
			width: '30%',
			padding: '50px',
			borderColor: 'green',
			borderRadius: '10px',
			backgroundColor: '#3ec358',
			color: '#fff',
			textAlign: 'center'
		}
		return (
			<div style={counterStyle}>
				<h2>Counter</h2>
				<h1>{this.state.counter}</h1>
				<Button 
					onClick={this.decrementCounter}
					text="-"
				/>
				<Button 
					onClick={this.incrementCounter}
					text="+"
				/>
			</div>
		)
	}
}

//The component that renders the button
const Button = ({onClick, text}) => {
	const buttonStyle={
		width: '4em',
		padding: '1em',
		backgroundColor: 'white',
		fontSize: 20,
		borderRadius: '50%',
		cursor: 'pointer'
	}
	return <button 
				onClick={onClick}
				style={buttonStyle}
			>{text}</button>
}

ReactDOM.render(<Counter />, document.getElementById('container'))