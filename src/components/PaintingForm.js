import React,  {Component} from 'react';

class PaintingForm extends Component{

    state = {
        art: {
            image: "",
            title: "",
            artist: "",
            date: "",
            width: "",
            height: "",
        },
        error: null
    }

    handleChange = (e) => {
        //console.log(e.target.value) // how we target a particular field with user input
       // console.log(this.state.art)
        this.setState({ art: {...this.state.art, [e.target.name]: e.target.value} })
        //art: tell the state which obj we are accessing
        //e.target.name = telling the spread operator that we are acceessing something with a specific key
        //if we fill in our form we should be able to see this infor in the react app (painting form)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.art.image.length  > 1 && this.state.art.title.length > 1){
            //console.log(this.state)
            this.props.addPainting(this.state.art)
        /** 
            this.props bc addPainting() was created in {App} and passed as a prop to be used in {pFrom}
            take the art, once its executed, run the validation, pass it our art and send it back to the {App} to render 
        */
            
        }
        else if(this.state.art.image.length > 1 ){
            this.validateLength("title")
        }
        else if(this.state.art.title.length > 1 ){
            this.validateLength("image")
        } 
        else {
            this.validateLength("title and image")
        }
    }

// handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.addPainting(this.state.art) //need explanation on this one
// }

    validateLength(item){
        this.setState({error: `Sorry ${item} must be 5 characters long`})
    }


    componentDidMount(){
        console.log("Hi from painting componentDidMount!")
        this.props.updateMessage(null)
    }

    componentWillUnmount(){
        console.log("Hi from componentWillUnmount!")
        this.props.updateMessage("Hello Paintings")
        
    }

    render(){
       
        return (
            <div>
            {this.state.error? this.state.error:null}
                <h1>Add a new Painting</h1>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <input type="text" name="image" placeholder="ImgURL" /><br/>
                    <input type="text" name="title" placeholder="Title" /><br/>
                    <input type="text" name="artist" placeholder="Artist Name" /><br/>
                    <input type="text" name="date" placeholder="date" /><br/>
                    <input type="text" name="width" placeholder="width" /><br/>
                    <input type="text" name="height" placeholder="height" /><br/>
                    <input type="submit" value="add new painting"/><br/>
                </form>
            </div>
        )
    }
}

export default PaintingForm