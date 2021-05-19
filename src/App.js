import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {paintings} from './painting_data.js' //Acceess to the painting data 
import PaintingsList from './components/PaintingList'; 
import NavBar from './components/NavBar';
import PaintingForm from './components/PaintingForm'


//Switching from func to class component
class App extends Component {
 //1st read on in the program
state = {
  color: "green",
  formView: false, //if false then form should disappear else from should appear
  paintings: paintings
}


//setState is asynfunc which gets removed from the executions flow and then added back in when resolved
changeColor = (e) => {
  console.log(e.target.value)
  this.setState({
    color:e.target.value //changes color to what was selected from the dropdwon menu
  }, () => console.log("Inside/ after setState ran:", this.state.color) 
  //equiv to .then()
  )
  console.log("Outside/ Before setState ran:", this.state.color)
}

//execution of this is based on the current state of our form view
toggleForm = () => {
  this.setState(prevState => { //returns the original state when it is called, lines 13-15
    console.log("PrevState:", prevState)
    return {formView: !prevState.formView} //then setState is executed and resolved
  }, () => console.log("Inside/ after setState ran:", this.state)
  ) 
  console.log("Outside/ before setState ran:", this.state)
}

addPainting = (painting) => {
  console.log(painting)
  //using spread operator to make copy of our paintings & we want to update state by added in our single painting into the new arr
  //this.setState({paintings: [...paintings, paintings]})
  this.setState({paintings: [...paintings, painting]})

}
  
render() {
  return (
      <div>
        {/* passing props down from parent to child to allow access to {Navbar} usig state  */}
        <NavBar 
          color={this.state.color} 
          title="Painters" 
          description="Legendary Artist"
          changeColor={this.changeColor}/>

        <button onClick={this.toggleForm}>Toggle Form</button>

        {/*  Ternary - if false then form should disappear else from should appear */}
        {this.state.formView ? <PaintingForm addPainting={this.addPainting} /> :
      <PaintingsList paintingsList={this.state.paintings} />}
      </div>
    )
  }
}
export default App;