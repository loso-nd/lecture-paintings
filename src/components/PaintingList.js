import PaintingCard from './PaintingCard'

const PaintingList = props => {
    console.log(props)

//We want to display a painting Card for every painting in our data, By looking at the original painting arr we see our paintings have been passed down & For every item in our painting arr we want to render a painting card. Using map we can iterate thru our arr and return an arr of painting Cards. 
    return (
        <div>
            {
                props.paintingsList.map(painting => {
                    return <PaintingCard key={painting.id} painting={painting} />
                })
            }
            {/* {props.anotherTest("Still here")} passing up from chid to parent */}
        </div>

    )
}

export default PaintingList;