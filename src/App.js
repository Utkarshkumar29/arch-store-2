import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Characters from "./views/characters";
import Episodes from "./views/episodes";
import Locations from "./views/locations";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/episodes" element={<Episodes/>}/>
            <Route path="/locations" element={<Locations/>}/>
        </Routes>
    </Router>
  )
}

export default App;
