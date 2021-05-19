import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import PaintingsList from './components/PaintingList'; 
import PaintingForm from './components/PaintingForm'
import { paintings } from './painting_data';


class AppLifeCycle extends Component {
 constructor(){
   console.log("Hi from constructor")
    super()
    this.state = {
        color: "green",
        paintings: [],
        formView: false, //if false then form should disappear else form should appear
        message: null,
        votes: paintings.votes
    }
}


addVote =() => {
  console.log("I am a vote: ", this.state.votes)
  this.setState(prevState => {
    return {votes:prevState.votes+1}
  })
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

//Another way to add a painting is to build the object when I added the painting here
addPainting = (info) => {
  console.log(info)
  const newPainting = {
      image: info.image,
      title: info.title,
      artist : {
          name: info.artist
      },
      date: info.date,
      dimensions: {
          width: info.width,
          height: info.height
      },
      votes: 0
  }
  //using spread operator to make copy of our paintings & we want to update state by added in our single painting into the new arr
  //this.setState({paintings: [...paintings, paintings]})
  this.setState({
        paintings: [...this.state.paintings, newPainting],
        formView: !this.state.formView})
}

updateMessage = (data) => {
  this.setState({
    message:data
  })
}

//Inherited everything from the component, Only runs after the render has been called
//used for onload on mounting of a component
componentDidMount(){
  console.log("Hi from componentDidMount!")
  fetch('http://localhost:3000/paintings')
  .then(res => res.json())
  .then(paintingsJson => this.setState({
      paintings: paintingsJson
  }))
  //.then(data => console.log(data)) //since this fucntions like a CB, we can console.log only. The console.log will act similar to a CB, and take the param from the second .then can console.log it
}

//Method that tracks any updates or renders on the DOM
componentDidUpdate() {
  console.log("Hi from componentDidUpdate!")
}
  
render() {
  console.log("Hi from render")
  return (
      <div>
        {/* passing props down from parent to child to allow access to {Navbar} usig state  */}
        <NavBar 
          color={this.state.color} 
          title="Painters" 
          description="Legendary Artist"
          changeColor={this.changeColor}/>

        <h2>{this.state.message ? this.state.message : null}</h2>
        <button onClick={this.toggleForm}>Toggle Form</button>
        {/*  Ternary - if false then form should disappear else from should appear */}
        {this.state.formView ? <PaintingForm addPainting={this.addPainting} updateMessage={this.updateMessage} /> :
      <PaintingsList paintingsList={this.state.paintings} addVote={this.addVote}/>}
      </div>
    )
  }
}
export default AppLifeCycle;

/**
 * 
 * If you notice in the conosole.log, we do not have paintings in our state. The current array is empty. We can use componentDidMount() to fetch the paintings from the server, updated state, and load them on to page ONLY after the html document has been loaded. 
 * 
 * Steps
 * componentDidMount can fetch our painting data, ensuring that it is not fetched until everything has been loaded to the DOM
 * Use setState inside our 2nd .then() to update our component to add our Paintings to the current state
 * Re-render our component and add our paintings to our applicaton
 * 
 * JSON-server then npm start
 * 
 * 
 */