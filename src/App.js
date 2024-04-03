import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ToggleController from './components/toogleController';
// import { dom } from '@fortawesome/fontawesome-svg-core';



function App() {


  return (
    <Router>
      <div className="App" >
        <ToggleController render={(clickHandler, toggler, domNode) => (<Nav clickHandler={clickHandler} toggler={toggler} domNode={domNode} />)} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
