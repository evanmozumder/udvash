import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Branches from "./components/Branches/Branches";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {/* routing to different page */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/branches">
            <Branches></Branches>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
