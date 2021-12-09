import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Register from "./Components/User/Register/Register";
import Login from "./Components/User/Login/Login";
import Forget from "./Components/User/ForgetPassword/Forget";
import MainMangaPage from "./Components/Manga/Main page/MainMangaPage";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Works" component={Work} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Forget" component={Forget} />
          <Route path="/Manga" component={MainMangaPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
