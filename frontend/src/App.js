// import { Sign } from "crypto";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Components/User/SignIn";
import SignUp from "./Components/User/SignUp";
import Home from "./Components/Home";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/Signin" element={<Signin />} exact="true"></Route>
          <Route path="/SignUp" element={<SignUp />} exact="true"></Route>
          <Route path="/Home" element={<Home />} exact="true"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
