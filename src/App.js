
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';


function App() {
  return (

    <div>
    {/* passing attr to Navbar since we passed it props in the {Navbar}  */}
          <NavBar color= "green"  title="Painters" description="Legendary Artist"/>
    </div>

  );
}

export default App;
