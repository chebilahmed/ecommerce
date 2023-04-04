// import Layout from "./components/layout/index";
import { BrowserRouter as Router ,Link, Route ,Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/containers/Home/index";
import Signin from "./components/containers/Signin/index";
import Signup from "./components/containers/Signup/index";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
