import React from 'react';

// Class component can have state
class App extends React.Component {
  render(){
  	//return React.createElement('h1',null,'Hello guys !')
    return <div><h1>Hello World</h1></div>
  }
}

// Stateless function will not have state 
// const App = () => <h1>Hello Eggheads</h1>
export default App