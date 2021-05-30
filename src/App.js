import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Rounter, Route, Switch, Link } from 'react-router-dom';

function App() {

  const Home = () => {
    return(
      <div className = "Home">
        <h1>Home</h1>
      </div>
    )
  }

  return (
   <Rounter>
   <div>
     <nav>
        <div className="wrap">
          <h1>LOGO</h1>
          <ul>
            <Link to = "/About">
            <li>About</li>
            </Link>  
            <Link to = "/Project">
            <li>Projects</li>
            </Link>
            <Link to = "/Contact"> 
            <li>Contact</li>
            </Link>
          </ul>
       
        </div>
     </nav>
     <Switch>
     <Route path = "/" exact component = {Home}/>
     <Route path = "/about" component = {About}/>
     <Route path = "/project" component = {Projects}/>
     <Route path = "/contact" component = {Contact}/>
     </Switch>
    </div>
    </Rounter>
  );
}

export default App;
