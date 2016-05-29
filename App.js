import React from 'react';
import ReactDOM from 'react-dom';

// Class component can have state
class App extends React.Component {
  constructor(){
  	super();
  	this.state = {
  		txt : 'this is the state',
  		cat : 0
  	}
  }
  update(e){
  	this.setState({txt:e.target.value})
  }
  render(){
  	let txt = this.props.txt
    return (
    	<div>
    		<input type="text" onChange={this.update.bind(this)} />
    		<h2> {this.state.txt} </h2>
    	</div>
    );
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);