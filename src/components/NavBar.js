// When Navbar is called, I am going to pass it something and if it has a value we can do so by saying (props.something). In order to fill the object with something we need to go where the component is being rendered and pass it some props
//Presentational Component
const NavBar = props => {
    console.log(props)
    return (
        //pass NavBar dynamice colors 
        // passing up from chid to parent  onClick={() => props.testing("Hello from Navbar")
        <div className= { `ui inverted ${props.color} menu`}>
            <a className="item" href="/">
                <h2 className="ui header">
                    <div className="content">{props.title}</div>
                    <div className="sub header">{props.description}</div>
                </h2>
            </a>
{/* Triggers onChange in the App */}
            <select onChange={props.changeColor} className="ui search dropdown right menu">
                <option value="purple">Green</option>
                <option value="teal">Teal</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
            </select>
        </div>
    )
}

export default NavBar