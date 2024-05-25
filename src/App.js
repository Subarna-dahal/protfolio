
import About from "./Components/About";
import Midl from "./Components/middlepage";
import NavBar from "./Components/Nav";
import{BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Services from "./Components/Service";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App" >
      <NavBar />
      <Router>
        <Routes>
        <Route path="/" Component={Midl}/>  
       <Route path="About"  Component={About}/>
       <Route path="/Service" Component={Services}/>
       <Route path="/Contact" Component={Contact}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
