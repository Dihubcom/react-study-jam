/*
 *The parent component where we call the child 
 *component two times passing different data in as props
 */

class Parent extends React.Component {
	click = () => {
		console.log('This is the parent Component')
	}

	render(){
		return (
			<div>
				<Child text="Child One" title="Title 1" onClick={this.click} />
				<Child text="Child Two" title="Title 2" onClick={this.click} />
			</div>
		)
	}
}

//here goes the child component
class Child extends React.Component {
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.text}</h2>
			</div>
		)
	}
}

ReactDOM.render(<Parent />, document.getElementById('container'))