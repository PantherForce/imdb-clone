
import './App.css';
import {BroswerRouter as Router , Routes , Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route index element = {<h1>Movies Page</h1>}  ></Route>
            <Route path = "movies/:hd" element ={<h1>Movies Detail</h1>}></Route>
            <Route path = "movies/:list" element ={<h1>Movies List</h1>}></Route>
            <Route path = "/*" element ={<h1>404 Error </h1>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
