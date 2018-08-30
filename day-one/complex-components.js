class Board extends React.Component {
	render(){
		const boardStyle = {
			height: '400px',
			width: '300px',
			backgroundColor: 'blue'
		}
		return (
			<div style={boardStyle}>
				<Card />
				<Label />
			</div>
		)
	}
}
 
const Card = (props) => {
	const cardStyle = {
		height: '200px',
		width: '200px'
	}
}

const Label = (props) => {
	return <div>
		<span>Blue</span>
	</div>
}

ReactDOM.render(<Board />, document.getElementById('container'))