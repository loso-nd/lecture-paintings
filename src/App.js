import 'semantic-ui-css/semantic.min.css';
import paintings from './painting_data.js' //Acceess to the painting data 
import PaintingList from './components/PaintingList'; 
import NavBar from './components/NavBar';

function App() {
// Learn how to PASS UP props from child to the parent
  const test = (message) => {
    console.log(message)
  }
  return (
    <div>
{/* passing props down from parent to child to allow access to {Navbar}  */}
      {/* <NavBar testing={test}/> // passing props up from the child to the parent */}
        <NavBar color= "green" title=" Painters" description="Legendary Artist"/>
{/*  passing props down from parent to child to allow access to {PaintingList} */}
      <PaintingList paintingsList={paintings} anotherTest={test}/>
    </div>
  );
}
export default App;