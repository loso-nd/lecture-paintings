import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {paintings} from './painting_data.js' //Acceess to the painting data 
import PaintingList from './components/PaintingList'; 
import NavBar from './components/NavBar';

//Switching from func to class component
class App extends Component {
  // constructor(){
  //   super(props) //used to inheirt props from other components 
  //   this.state = {
  //     color: red
  //   }
  // }

//babel language converter converts the constructor above into the one simple state below
state = {
  color: "green"
}

//Handler method that will be passed into the synthetic events
//still can pass e the same way as vanilla js
//asynfunc which gets removed from the executions flow and then added back in when resolved
changeColor = (e) => {
  console.log(e.target.value)
  this.setState({
    color: "teal"
  }, () => console.log("Inside/ after setState ran:", this.state.color)
  )
  //Runs first then runs the console.log inside the setState
  console.log("Outside/ Before setState ran:", this.state.color)
}
  
  render() {
    // const test = (message) => console.log(message)
    return (

      <div>
      {/* passing props down from parent to child to allow access to {Navbar} usig state  */}
        <NavBar color={this.state.color} title="Painters" description="Legendary Artist"
          changeColor={this.changeColor}/>

      {/* We want to make things change with a click event also called synthetic events */}
      <button onClick={ () => this.changeColor()}>Change Color</button>
      {/*  passing props down from parent to child to allow access to {PaintingList} */}
        <PaintingList paintingsList={paintings}  />
          </div>
    )
  }
}
export default App;