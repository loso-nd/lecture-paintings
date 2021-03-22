// When Navbar is called, I amm going to pass it something and if it has a value we can do so by saying (props.something). In order to fill the object with something we need to go where the component is being rendered and add attriubties (key="value")
const NavBar = props => {
    console.log(props)
    return (
        //pass NavBar dynamice colors
        <div className= { `ui inverted ${props.color} menu`}>
            <a className="item">
                <h2 className="ui header">
                    <div className="content">{props.title}</div>
                    <div className="sub header">{props.description}</div>
                </h2>
            </a>
        </div>
    )
}

export default NavBar