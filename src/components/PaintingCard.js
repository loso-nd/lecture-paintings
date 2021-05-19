const PaintingCard = props => {
    let {image, title, artist, date, width, height, votes} = props.painting
    return (
        <div>
            <img src ={image} alt={artist.name}/>
            <h4>"{title}" by {artist.name}</h4>
            <p>Year: {date}</p>
            <p>Dimensions: {width} in. x {height}</p>
            <div className="ui labeled button">
                <div className="ui red button" onClick={() => props.addVote()}>
                    <i className="heart icon"></i>
                    Add votes
                    <a href="./" className="ui basic left pointing label">{votes}</a>
                </div>        
            </div>
        </div>       
        // <div>
        //     <img src ={props.painting.image} />
        //     <h4>"{props.painting.title}" by {props.painting.artist.name}</h4>
        //     <p>Year: {props.painting.date}</p>
        //     <p>Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height}</p>
        // </div>
    )
}

export default PaintingCard;