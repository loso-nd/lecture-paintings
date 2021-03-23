
import 'semantic-ui-css/semantic.min.css';
import paintings from './painting_data.js' //Acceess to the painting data 

import PaintingsList from './components/PaintingList'; //Access to the {PaintingL} where we create a cards for each painting from the data
import NavBar from './components/NavBar';


function App() {
  return (

    <div>
    {/* adding attr [key="value"] to Navbar and passing them as props to be used inside our {Navbar}  */}
          <NavBar color= "green" title=" Painters" description="Legendary Artist"/>
{/* adding attr [key="value"] to {PaintingsList} & passing it as props for access to be used inside {PaintingList} */}
          <PaintingsList  paintingsList={paintings}/>
    </div>

  );
}

export default App;
