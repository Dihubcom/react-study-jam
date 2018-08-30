class Counter extends React.Component {
	constructor(){
		super();

		this.state = {
			counter: 0
		}
	}

	incrementCounter = () => {
		this.setState(prevState => { 
			return {
				counter: prevState.counter ++
			}
		});
	}

	decrementCounter = () => {
		this.setState(prevState => { 
			return {
				counter: prevState.counter --
			}
		});
	}

	render(){
		const counterStyle = {
			padding: '50px',
			borderRadius: '10px'
		}
		return (
			<div style={counterStyle}>
				<span>{this.state.counter}</span>
				<Button 
					onClick={this.incrementCounter}
					text="+"/>
				<Button 
					onClick={this.decrementCounter}
					text="-"/>
			</div>
		)
	}
}

const Button = (onClick, text) => {
	return <button onClick={onClick}>{text}</button>
}

ReactDOM.render(<Counter />, document.getElementById('container'))