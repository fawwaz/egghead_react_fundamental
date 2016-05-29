import React from 'react';
import ReactDOM from 'react-dom';

// Class component can have state
class App extends React.Component {
  render(){
  	let txt = this.props.txt
    return (
    	<div>
    		<h1> {this.props.txt}</h1>
    		<h1> {txt}</h1>
    	</div>
    );
  }
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt : 'default text here'
}
ReactDOM.render(
	<App cat={5} txt="this is the props text" />,
	document.getElementById('app')
);