import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
function App() {
  return (
    <div className="App">
      <h1>Niyaz</h1>
   <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
   </Routes>
   </Router>
   </div>
  );
}

export default App;
